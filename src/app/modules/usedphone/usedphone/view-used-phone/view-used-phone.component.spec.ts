import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsedPhoneComponent } from './view-used-phone.component';

describe('ViewUsedPhoneComponent', () => {
  let component: ViewUsedPhoneComponent;
  let fixture: ComponentFixture<ViewUsedPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsedPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsedPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
