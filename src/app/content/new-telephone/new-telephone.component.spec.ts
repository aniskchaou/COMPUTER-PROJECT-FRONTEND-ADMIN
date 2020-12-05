import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTelephoneComponent } from './new-telephone.component';

describe('NewTelephoneComponent', () => {
  let component: NewTelephoneComponent;
  let fixture: ComponentFixture<NewTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
