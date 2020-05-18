import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitpwdcodeComponent } from './reinitpwdcode.component';

describe('ReinitpwdcodeComponent', () => {
  let component: ReinitpwdcodeComponent;
  let fixture: ComponentFixture<ReinitpwdcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitpwdcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitpwdcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
