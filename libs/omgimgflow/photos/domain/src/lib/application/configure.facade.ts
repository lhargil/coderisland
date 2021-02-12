import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface ImageFlowSettings {
  width: number;
  height?: number;
  sepia?: boolean;
}

const initialImageFlowSettings: ImageFlowSettings = {
  width: 300,
  sepia: false
}

class ConfiguredImageState {
  imageUrl: string = '';
  settings: ImageFlowSettings = initialImageFlowSettings;
}

@Injectable({providedIn: 'root'})
export class ConfigureFacade {
  private state = new ConfiguredImageState();
  private dispatch = new BehaviorSubject<ConfiguredImageState>(this.state);
  private destroySubject = new ReplaySubject<void>(1);
  private destroy$ = this.destroySubject.asObservable();

  configuredImage: Observable<string> = this.dispatch.asObservable().pipe(
    map((state: ConfiguredImageState) => state.imageUrl),
    startWith('')
  );

  constructor() { }

}
