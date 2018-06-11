import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineShadeSparklineComponent } from './inline-shade-sparkline.component';

describe('InlineShadeSparklineComponent', () => {
  let component: InlineShadeSparklineComponent;
  let fixture: ComponentFixture<InlineShadeSparklineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineShadeSparklineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineShadeSparklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
