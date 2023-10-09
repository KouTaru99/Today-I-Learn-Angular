import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGroupComponent } from './table-group.component';

describe('TableGroupComponent', () => {
  let component: TableGroupComponent;
  let fixture: ComponentFixture<TableGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableGroupComponent]
    });
    fixture = TestBed.createComponent(TableGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
