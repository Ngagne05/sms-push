import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargementsComponent } from './rechargements.component';

describe('RechargementsComponent', () => {
  let component: RechargementsComponent;
  let fixture: ComponentFixture<RechargementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
