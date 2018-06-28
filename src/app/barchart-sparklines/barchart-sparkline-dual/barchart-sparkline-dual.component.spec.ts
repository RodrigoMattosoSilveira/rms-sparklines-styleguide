import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartSparklineDualComponent } from './barchart-sparkline-dual.component';

describe('BarchartSparklineDualComponent', () => {
  let component: BarchartSparklineDualComponent;
  let fixture: ComponentFixture<BarchartSparklineDualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartSparklineDualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartSparklineDualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
