import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparklineLineComponent } from './sparkline-line.component';

describe('SparklineLineComponent', () => {
  let component: SparklineLineComponent;
  let fixture: ComponentFixture<SparklineLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparklineLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparklineLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
