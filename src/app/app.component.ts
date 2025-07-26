import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HouseColumnComponent } from './house-column/house-column.component';
import { HousePoints, HousePointsService } from './services/house-points.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HouseColumnComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'house-points-tracker';
    readonly houseData = signal<HousePoints[]>([{ name: '', points: 0 }]);
    private service = inject(HousePointsService);

    readonly maxPoints = computed<number>(() => {
        let pointsLimit:number = 150;
        const maxScore:number = Math.max(...this.houseData().map(house => house.points));
        pointsLimit = Math.max(pointsLimit, Math.ceil(maxScore * 1.2))
        return (pointsLimit / 100) * 100;
    });

    
    constructor() {
        this.service.getHousePoints().subscribe(data => {
            console.log('House points data fetched:', data);
            this.houseData.set(data)
        });
    }
}
