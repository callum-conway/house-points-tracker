import { Component, input } from '@angular/core';

@Component({
  selector: 'app-house-crest',
  imports: [],
  standalone: true,
  templateUrl: './house-crest.component.html',
  styleUrl: './house-crest.component.scss'
})
export class HouseCrestComponent {
  crestType = input<string>('');

  crestPath = () => {
    switch (this.crestType()) {
      case 'Rimu':
        return '/crests/kiwi-crest.svg';
      case 'Kowhai':
        return '/crests/tui-crest.svg';
      case 'Kauri':
        return '/crests/weta-crest.svg';
      case 'Totara':
        return '/crests/bat-crest.svg';
      default:
        return '';
    }
  };
}
