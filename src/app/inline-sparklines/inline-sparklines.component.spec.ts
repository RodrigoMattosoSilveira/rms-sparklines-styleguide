import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineSparklinesComponent } from './inline-sparklines.component';

describe('InlineSparklinesComponent', () => {
  let component: InlineSparklinesComponent;
  let fixture: ComponentFixture<InlineSparklinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineSparklinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineSparklinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
