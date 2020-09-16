import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, EventEmitter, Input, OnDestroy, OnInit, Output, Type, ViewChild } from '@angular/core';
import { ContentHostDirective } from '@coderisland/shared/directives/content-host';
import { fromEvent, Subject, Observable } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators'

@Component({
  selector: 'coderisland-slide-in',
  templateUrl: './slide-in.component.html',
  styleUrls: ['./slide-in.component.scss']
})
export class SlideInComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ContentHostDirective, { static: true })
  modalContentHost!: ContentHostDirective;
  @Output() saveClicked: EventEmitter<{ data: any, afterSave: () => void }>;
  @Output() deleteClicked: EventEmitter<{ data: any, afterDelete: () => void }>;
  @Output() closeClicked: EventEmitter<any>;
  @Input() content!: {
    component: Type<any>;
    formData: any;
    heading: string;
    showDelete: boolean;
  };

  private loadedComponent: any;
  private clickedOutside$ = fromEvent(window, 'click').pipe(
    filter((ev: any) => {
      return ev.target.id.includes('slide-in-container');
    })
  );
  destroyed$ = new Subject();
  formIsInvalid$!: Observable<any>;
  open = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.saveClicked = new EventEmitter<{ data: any, afterSave: () => void }>();
    this.deleteClicked = new EventEmitter<{ data: any, afterDelete: () => void }>();
    this.closeClicked = new EventEmitter<any>();
  }

  ngOnInit() {
    this.loadComponent();

    setTimeout(() => {
      this.clickedOutside$
        .pipe(
          tap((_) => this.close()),
          takeUntil(this.destroyed$)
        )
        .subscribe();
    });
  }

  ngAfterViewInit() {
    this.formIsInvalid$ = this.loadedComponent.instance.formIsValid$.pipe(
      map((valid: boolean) => !valid),
      takeUntil(this.destroyed$)
    );
    setTimeout(() => {
      this.openModal();
    });
  }

  private loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.content.component
    );
    const viewContainerRef = this.modalContentHost.viewContainerRef;
    viewContainerRef.clear();

    this.loadedComponent = viewContainerRef.createComponent(componentFactory);
    this.loadedComponent.instance.formData = this.content.formData;
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  save() {
    this.loadedComponent.instance
      .formSubmit((formValues: any) =>
        this.saveClicked.emit({ data: formValues, afterSave: () => this.close() })
      );
  }

  delete() {
    this.deleteClicked.emit({ data: this.content.formData, afterDelete: () => this.close() });
  }

  openModal() {
    this.open = !this.open;
  }

  close() {
    this.openModal();
    setTimeout(() => {
      this.closeClicked.emit({});
    }, 500);
  }
}
