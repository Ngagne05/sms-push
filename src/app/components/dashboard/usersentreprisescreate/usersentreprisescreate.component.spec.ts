import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersentreprisescreateComponent } from './usersentreprisescreate.component';

describe('UsersentreprisescreateComponent', () => {
  let component: UsersentreprisescreateComponent;
  let fixture: ComponentFixture<UsersentreprisescreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersentreprisescreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersentreprisescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
