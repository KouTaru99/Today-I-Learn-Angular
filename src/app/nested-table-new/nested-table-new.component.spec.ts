import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedTableNewComponent } from './nested-table-new.component';

describe('NestedTableNewComponent', () => {
  let component: NestedTableNewComponent;
  let fixture: ComponentFixture<NestedTableNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedTableNewComponent]
    });
    fixture = TestBed.createComponent(NestedTableNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
