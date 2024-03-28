import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { ErrorService } from 'src/app/service/error.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { bottom, end } from '@popperjs/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SnackService } from 'src/app/service/snack.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorSrv: ErrorService, private snackSrv: SnackService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.errorSrv.setError(err.error.message);
        this.errorSrv.getError();
        this.snackSrv.openSnack(err.error.message, true);

        return of(err.error);
      })
    );
  }
}
