import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartSparklinesComponent } from './barchart-sparklines.component';

describe('BarchartSparklinesComponent', () => {
  let component: BarchartSparklinesComponent;
  let fixture: ComponentFixture<BarchartSparklinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartSparklinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartSparklinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
