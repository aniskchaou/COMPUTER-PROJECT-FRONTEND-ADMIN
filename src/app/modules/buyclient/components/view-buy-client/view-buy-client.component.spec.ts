import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuyClientComponent } from './view-buy-client.component';

describe('ViewBuyClientComponent', () => {
  let component: ViewBuyClientComponent;
  let fixture: ComponentFixture<ViewBuyClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuyClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBuyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
