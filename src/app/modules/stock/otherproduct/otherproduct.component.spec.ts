import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherproductComponent } from './otherproduct.component';

describe('OtherproductComponent', () => {
  let component: OtherproductComponent;
  let fixture: ComponentFixture<OtherproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
