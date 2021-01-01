import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFixComponent } from './add-fix.component';

describe('AddFixComponent', () => {
  let component: AddFixComponent;
  let fixture: ComponentFixture<AddFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
