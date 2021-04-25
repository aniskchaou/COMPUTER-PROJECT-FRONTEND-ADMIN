import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellularplanComponent } from './cellularplan.component';

describe('CellularplanComponent', () => {
  let component: CellularplanComponent;
  let fixture: ComponentFixture<CellularplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellularplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellularplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
