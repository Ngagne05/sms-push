import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriselistComponent } from './entrepriselist.component';

describe('EntrepriselistComponent', () => {
  let component: EntrepriselistComponent;
  let fixture: ComponentFixture<EntrepriselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
