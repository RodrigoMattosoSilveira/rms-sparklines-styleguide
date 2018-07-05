import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxplotSparklinesComponent } from './boxplot-sparklines.component';

describe('BoxplotSparklinesComponent', () => {
  let component: BoxplotSparklinesComponent;
  let fixture: ComponentFixture<BoxplotSparklinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxplotSparklinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxplotSparklinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
