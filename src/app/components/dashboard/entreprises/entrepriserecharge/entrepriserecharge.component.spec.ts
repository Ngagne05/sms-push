import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriserechargeComponent } from './entrepriserecharge.component';

describe('EntrepriserechargeComponent', () => {
  let component: EntrepriserechargeComponent;
  let fixture: ComponentFixture<EntrepriserechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriserechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriserechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
