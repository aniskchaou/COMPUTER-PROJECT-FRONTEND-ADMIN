import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFixComponent } from './edit-fix.component';

describe('EditFixComponent', () => {
  let component: EditFixComponent;
  let fixture: ComponentFixture<EditFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
