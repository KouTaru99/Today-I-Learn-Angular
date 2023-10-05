import { Component, Input, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NestedTableComponent implements OnChanges {
  @Input() dataSource :any[] = []
  @Input() colConfigs :any[] = []
  @Input() colConfigChild :any[] = []
  @ViewChild('myTable') table: any;

  rows: any[] = [];
  expanded: any = {};
  timeout: any;
  ColumnMode = ColumnMode;

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.dataSource = changes['dataSource'].currentValue;
    }
    if (changes['colConfigs']) {
      this.colConfigs = changes['colConfigs'].currentValue;
    }
    if (changes['colConfigChild']) {
      this.colConfigChild = changes['colConfigChild'].currentValue;
    }
    console.log(changes['dataSource']);

  }



  onPage(event : any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }


  toggleExpandRow(row :any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event : any) {
    console.log('Detail Toggled', event);
  }
}
