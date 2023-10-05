import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTableGroupComponent } from './show-table-group.component';

describe('ShowTableGroupComponent', () => {
  let component: ShowTableGroupComponent;
  let fixture: ComponentFixture<ShowTableGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTableGroupComponent]
    });
    fixture = TestBed.createComponent(ShowTableGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
