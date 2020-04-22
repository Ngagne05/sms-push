import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersentreprisesdetailsComponent } from './usersentreprisesdetails.component';

describe('UsersentreprisesdetailsComponent', () => {
  let component: UsersentreprisesdetailsComponent;
  let fixture: ComponentFixture<UsersentreprisesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersentreprisesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersentreprisesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
