import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCrestComponent } from './house-crest.component';

describe('HouseCrestComponent', () => {
  let component: HouseCrestComponent;
  let fixture: ComponentFixture<HouseCrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseCrestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseCrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
