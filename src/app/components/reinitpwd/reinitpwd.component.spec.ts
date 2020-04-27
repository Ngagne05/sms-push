import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitpwdComponent } from './reinitpwd.component';

describe('ReinitpwdComponent', () => {
  let component: ReinitpwdComponent;
  let fixture: ComponentFixture<ReinitpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
