import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateComponent } from './admincreate.component';

describe('AdmincreateComponent', () => {
  let component: AdmincreateComponent;
  let fixture: ComponentFixture<AdmincreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
