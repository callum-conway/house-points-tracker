import { Component, computed, input } from '@angular/core';
import { HouseCrestComponent } from '../house-crest/house-crest.component';
import { HousePoints } from '../services/house-points.service';

@Component({
  selector: 'app-house-column',
  imports: [HouseCrestComponent],
  standalone: true,
  templateUrl: './house-column.component.html',
  styleUrl: './house-column.component.scss'
})
export class HouseColumnComponent {
  house = input<HousePoints>({ name: '', points: 0 });
  maxPoints = input<number>(1000);
  houseColor = computed<string>(() => {
    switch (this.house().name) {
      case 'Rimu':
        return '#136C49'; // Green
      case 'Kowhai':
        return '#FABB23'; // Yellow
      case 'Kauri':
        return '#C21E16'; // Red
      case 'Totara':
        return '#135884'; // Blue
      default:
        return '#CCCCCC'; // Default gray for unknown house
    }
  });

  fillHeight = computed<number>(() => this.house().points / this.maxPoints() * 100);
}
