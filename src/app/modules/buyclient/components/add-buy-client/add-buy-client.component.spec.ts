import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyClientComponent } from './add-buy-client.component';

describe('AddBuyClientComponent', () => {
  let component: AddBuyClientComponent;
  let fixture: ComponentFixture<AddBuyClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuyClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
