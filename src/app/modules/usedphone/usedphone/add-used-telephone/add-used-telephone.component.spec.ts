import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsedTelephoneComponent } from './add-used-telephone.component';

describe('AddUsedTelephoneComponent', () => {
  let component: AddUsedTelephoneComponent;
  let fixture: ComponentFixture<AddUsedTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsedTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsedTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
