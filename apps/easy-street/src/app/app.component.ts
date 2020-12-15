import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'easy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private activities$ = of([
    {
      description: 'Payment to Molly Sanders',
      amount: {
        value: 20000,
        currency: 'USD',
      },
      status: 'Success',
      date: 'July 11, 2020',
    },
  ]);
  page$ = new BehaviorSubject<number>(0);
  recentActivities$ = combineLatest([this.activities$, this.page$]).pipe(
    tap(([activities, page]) => console.log(activities, page)),
    switchMap(([activities, page]) => {
      console.log(page);
      return of(activities);
    })
  );

  isFirstPage$ = this.page$.pipe(map(page => page == 0));

  handleNextClick() {
    this.page$.next(this.page$.getValue() + 1);
  }

  handlePreviousClick() {
    this.page$.next(this.page$.getValue() - 1);
  }

  handleAddNewClick() {

  }
}
