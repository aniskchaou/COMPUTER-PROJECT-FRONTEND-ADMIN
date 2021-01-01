import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewTelephoneComponent } from './view-new-telephone.component';

describe('ViewNewTelephoneComponent', () => {
  let component: ViewNewTelephoneComponent;
  let fixture: ComponentFixture<ViewNewTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
