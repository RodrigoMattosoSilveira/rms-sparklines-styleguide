import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineSimpleSparklineComponent } from './inline-simple-sparkline.component';

describe('InlineSimpleSparklineComponent', () => {
  let component: InlineSimpleSparklineComponent;
  let fixture: ComponentFixture<InlineSimpleSparklineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineSimpleSparklineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineSimpleSparklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
