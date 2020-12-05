import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyclientComponent } from './buyclient.component';

describe('BuyclientComponent', () => {
  let component: BuyclientComponent;
  let fixture: ComponentFixture<BuyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
