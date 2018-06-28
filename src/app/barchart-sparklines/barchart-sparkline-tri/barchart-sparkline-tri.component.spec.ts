import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartSparklineTriComponent } from './barchart-sparkline-tri.component';

describe('BarchartSparklineTriComponent', () => {
  let component: BarchartSparklineTriComponent;
  let fixture: ComponentFixture<BarchartSparklineTriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartSparklineTriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartSparklineTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
