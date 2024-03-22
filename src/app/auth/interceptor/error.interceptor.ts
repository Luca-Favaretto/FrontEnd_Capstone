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

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorSrv: ErrorService, private snackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.errorSrv.setError(err.error.message);
        this.errorSrv.getError();
        this.openSnack(err.error.message);

        return of(err.error);
      })
    );
  }
  openSnack(massage: string) {
    this.snackBar.open(massage, 'close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['error-snack'],
    });
  }
}
