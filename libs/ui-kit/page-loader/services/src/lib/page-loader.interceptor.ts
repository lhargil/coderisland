import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageLoaderService } from './page-loader.service';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class PageLoaderInterceptor implements HttpInterceptor {

  constructor(private pageLoaderService: PageLoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.pageLoaderService.show();
    return next.handle(request).pipe(
      finalize(() => this.pageLoaderService.hide())
    );
  }
}
