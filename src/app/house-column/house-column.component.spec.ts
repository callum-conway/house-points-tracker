import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseColumnComponent } from './house-column.component';

describe('HouseColumnComponent', () => {
  let component: HouseColumnComponent;
  let fixture: ComponentFixture<HouseColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
