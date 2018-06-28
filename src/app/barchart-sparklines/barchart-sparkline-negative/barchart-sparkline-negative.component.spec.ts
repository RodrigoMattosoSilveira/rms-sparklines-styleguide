import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartSparklineNegativeComponent } from './barchart-sparkline-negative.component';

describe('BarchartSparklineNegativeComponent', () => {
  let component: BarchartSparklineNegativeComponent;
  let fixture: ComponentFixture<BarchartSparklineNegativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartSparklineNegativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartSparklineNegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
