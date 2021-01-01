import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuyClientComponent } from './edit-buy-client.component';

describe('EditBuyClientComponent', () => {
  let component: EditBuyClientComponent;
  let fixture: ComponentFixture<EditBuyClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBuyClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBuyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
