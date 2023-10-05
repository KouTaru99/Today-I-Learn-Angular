import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDatatableComponent } from './single-datatable.component';

describe('SingleDatatableComponent', () => {
  let component: SingleDatatableComponent;
  let fixture: ComponentFixture<SingleDatatableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleDatatableComponent]
    });
    fixture = TestBed.createComponent(SingleDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
