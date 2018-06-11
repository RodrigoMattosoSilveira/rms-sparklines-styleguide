import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartSimpleSparklineComponent } from './barchart-simple-sparkline.component';

describe('BarchartSimpleSparklineComponent', () => {
  let component: BarchartSimpleSparklineComponent;
  let fixture: ComponentFixture<BarchartSimpleSparklineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartSimpleSparklineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartSimpleSparklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
