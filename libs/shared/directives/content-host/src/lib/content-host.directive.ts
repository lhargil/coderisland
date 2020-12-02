import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[coderislandContentHost]'
})
export class ContentHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
