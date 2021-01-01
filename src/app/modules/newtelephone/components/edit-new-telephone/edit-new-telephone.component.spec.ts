import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewTelephoneComponent } from './edit-new-telephone.component';

describe('EditNewTelephoneComponent', () => {
  let component: EditNewTelephoneComponent;
  let fixture: ComponentFixture<EditNewTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
