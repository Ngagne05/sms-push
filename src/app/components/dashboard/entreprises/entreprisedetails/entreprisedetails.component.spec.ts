import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisedetailsComponent } from './entreprisedetails.component';

describe('EntreprisedetailsComponent', () => {
  let component: EntreprisedetailsComponent;
  let fixture: ComponentFixture<EntreprisedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreprisedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
