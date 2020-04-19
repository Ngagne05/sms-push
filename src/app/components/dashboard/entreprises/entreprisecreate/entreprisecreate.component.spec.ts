import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisecreateComponent } from './entreprisecreate.component';

describe('EntreprisecreateComponent', () => {
  let component: EntreprisecreateComponent;
  let fixture: ComponentFixture<EntreprisecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreprisecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
