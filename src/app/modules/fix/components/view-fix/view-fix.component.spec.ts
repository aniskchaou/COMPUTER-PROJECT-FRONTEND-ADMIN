import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFixComponent } from './view-fix.component';

describe('ViewFixComponent', () => {
  let component: ViewFixComponent;
  let fixture: ComponentFixture<ViewFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
