import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { SlideInComponent } from './slide-in.component';
import { SlideInService } from '@coderisland/ui-kit/slide-in/service';
import { SlideInModes, SlideInState } from '@coderisland/ui-kit/slide-in/state';
import { ContentHostDirective } from '@coderisland/shared/directives/content-host';

@Component({
  selector: 'coderisland-slide-in-shell',
  templateUrl: './slide-in-shell.component.html',
  styleUrls: ['./slide-in-shell.component.scss']
})
export class SlideInShellComponent implements OnInit {
  @ViewChild(ContentHostDirective, { static: true })
  contentHost!: ContentHostDirective;

  constructor(
    private slideInService: SlideInService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.slideInService.notification$.subscribe(
      this.handleModalNotifications()
    );
  }

  private handleModalNotifications(): (modalState: SlideInState) => void {
    return (modalState) => {
      const refs = this.loadSlideInComponent(SlideInComponent);

      this.toggleBodyScroll(true);

      refs.component.closeClicked.subscribe((_: any) => {
        this.dismissModal(refs);
      });

      refs.component.saveClicked.subscribe((saveEvent: { data: any, afterSave: () => void }) => {
        modalState.handleSave(saveEvent.data, saveEvent.afterSave);
      });

      refs.component.deleteClicked.subscribe((deleteEvent: { data: any, afterDelete: () => void }) => {
        if (modalState.handleDelete) {
          modalState.handleDelete(deleteEvent.data, deleteEvent.afterDelete);
        }
      });

      refs.component.content = {
        component: modalState.component,
        formData: modalState.formData,
        heading: modalState.heading,
        showDelete: modalState.modalMode == SlideInModes.Update,
      };
    };
  }

  private dismissModal(refs: {
    component: SlideInComponent;
    viewContainerRef: ViewContainerRef;
  }) {
    refs.viewContainerRef.clear();
    this.toggleBodyScroll(false);
  }

  private loadSlideInComponent(componentToRender: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentToRender
    );

    console.log(this.contentHost);

    const viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();

    return {
      component: viewContainerRef.createComponent(componentFactory)
        .instance as SlideInComponent,
      viewContainerRef,
    };
  }

  private toggleBodyScroll(toggledOn: boolean) {
    if (toggledOn) {
      document.querySelector('body')?.classList.add('modal-open');
    } else {
      document.querySelector('body')?.classList.remove('modal-open');
    }
  }

}
