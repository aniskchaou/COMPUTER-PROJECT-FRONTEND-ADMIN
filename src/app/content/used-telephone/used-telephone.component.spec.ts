import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedTelephoneComponent } from './used-telephone.component';

describe('UsedTelephoneComponent', () => {
  let component: UsedTelephoneComponent;
  let fixture: ComponentFixture<UsedTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
