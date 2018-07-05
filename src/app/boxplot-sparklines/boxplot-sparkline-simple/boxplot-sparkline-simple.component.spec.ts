import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxplotSparklineSimpleComponent } from './boxplot-sparkline-simple.component';

describe('BoxplotSparklineSimpleComponent', () => {
  let component: BoxplotSparklineSimpleComponent;
  let fixture: ComponentFixture<BoxplotSparklineSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxplotSparklineSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxplotSparklineSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
