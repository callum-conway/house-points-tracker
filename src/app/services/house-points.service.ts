import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, interval, startWith, switchMap, tap, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
export interface HousePoints {
    name: string;
    points: number;
}

@Injectable({
    providedIn: 'root'
})
export class HousePointsService {
    private http = inject(HttpClient);
    private endpoints = 'https://script.google.com/macros/s/AKfycbxeF4kZMFihf5anrPtnmd41KlHpBpkz12zPgn7E6InMmNg476PEw5qjeozD9FYe_8cN/exec';
    private isLoadedSubject = new BehaviorSubject<boolean>(false);
    isLoaded$ = this.isLoadedSubject.asObservable();

    getHousePoints() {
        return interval(6000).pipe( // Run every 6 seconds
            startWith(0), // Start immediately
            switchMap(() => 
                this.http.get<HousePoints[]>(this.endpoints).pipe(
                    tap(() => this.isLoadedSubject.next(true)), // ✅ Set loaded flag on success
                    catchError(error => {
                        console.error('Error fetching house points:', error);
                        return of([]); // ✅ Wrap in observable
                    })
                )
            )
        );
    }
}
