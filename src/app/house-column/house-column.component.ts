import { Component, computed, input, HostListener } from '@angular/core';
import { HouseCrestComponent } from '../house-crest/house-crest.component';
import { HousePoints } from '../services/house-points.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-house-column',
  host: {
    'style': 'display: contents;'
  },
  imports: [HouseCrestComponent, CommonModule],
  standalone: true,
  templateUrl: './house-column.component.html',
  styleUrl: './house-column.component.scss'
})
export class HouseColumnComponent {
  isMobile: boolean = window.innerWidth < 768;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobile = (event.target as Window).innerWidth < 768;
  }

  house = input<HousePoints>({ name: '', points: 0 });
  maxPoints = input<number>(1000);
  fillValue = computed<number>(() => this.house().points / this.maxPoints() * 100);
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

}
