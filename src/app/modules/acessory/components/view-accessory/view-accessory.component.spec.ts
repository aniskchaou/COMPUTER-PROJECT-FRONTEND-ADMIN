import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccessoryComponent } from './view-accessory.component';

describe('ViewAccessoryComponent', () => {
  let component: ViewAccessoryComponent;
  let fixture: ComponentFixture<ViewAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccessoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
