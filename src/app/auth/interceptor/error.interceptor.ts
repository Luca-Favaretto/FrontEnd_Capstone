import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { ErrorService } from 'src/app/service/error.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorSrv: ErrorService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.errorSrv.setError(err.error);
        return of(err.error);
      })
    );
  }
}
