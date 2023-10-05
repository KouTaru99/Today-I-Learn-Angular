import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-single-datatable',
  templateUrl: './single-datatable.component.html',
  styleUrls: ['./single-datatable.component.scss']
})
export class SingleDatatableComponent implements OnChanges {
  @Input() dataSource :any[] = []
  @Input() colConfigs :any[] = []
  rows : any[] = [];


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
  }

}
