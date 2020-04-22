import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersentreprisesComponent } from './usersentreprises.component';

describe('UsersentreprisesComponent', () => {
  let component: UsersentreprisesComponent;
  let fixture: ComponentFixture<UsersentreprisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersentreprisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersentreprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
