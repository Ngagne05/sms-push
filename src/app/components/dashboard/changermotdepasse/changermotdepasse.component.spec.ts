import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangermotdepasseComponent } from './changermotdepasse.component';

describe('ChangermotdepasseComponent', () => {
  let component: ChangermotdepasseComponent;
  let fixture: ComponentFixture<ChangermotdepasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangermotdepasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangermotdepasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
