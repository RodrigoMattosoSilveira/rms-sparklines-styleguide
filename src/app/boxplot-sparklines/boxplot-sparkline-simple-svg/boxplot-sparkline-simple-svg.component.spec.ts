import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxplotSparklineSimpleSvgComponent } from './boxplot-sparkline-simple-svg.component';

describe('BoxplotSparklineSimpleSvgComponent', () => {
  let component: BoxplotSparklineSimpleSvgComponent;
  let fixture: ComponentFixture<BoxplotSparklineSimpleSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxplotSparklineSimpleSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxplotSparklineSimpleSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
