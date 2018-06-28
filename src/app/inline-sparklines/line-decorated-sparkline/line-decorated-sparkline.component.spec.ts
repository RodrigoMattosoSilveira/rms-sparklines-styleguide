import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDecoratedSparklineComponent } from './line-decorated-sparkline.component';

describe('LineDecoratedSparklineComponent', () => {
  let component: LineDecoratedSparklineComponent;
  let fixture: ComponentFixture<LineDecoratedSparklineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineDecoratedSparklineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDecoratedSparklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
