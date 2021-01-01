import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsedTelephoneComponent } from './edit-used-telephone.component';

describe('EditUsedTelephoneComponent', () => {
  let component: EditUsedTelephoneComponent;
  let fixture: ComponentFixture<EditUsedTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUsedTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsedTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
