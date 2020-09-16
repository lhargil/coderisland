import { Injectable } from '@angular/core';
import { SlideInState } from '@coderisland/ui-kit/slide-in/state';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideInService {
  private notificationSubject = new Subject<SlideInState>();
  get notification$() {
    return this.notificationSubject.asObservable();
  }
  constructor() {}

  show(data: SlideInState) {
    this.notificationSubject.next({ ...data });
  }
}

