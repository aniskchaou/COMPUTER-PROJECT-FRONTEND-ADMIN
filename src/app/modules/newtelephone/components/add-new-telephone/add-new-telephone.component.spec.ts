import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTelephoneComponent } from './add-new-telephone.component';

describe('AddNewTelephoneComponent', () => {
  let component: AddNewTelephoneComponent;
  let fixture: ComponentFixture<AddNewTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
