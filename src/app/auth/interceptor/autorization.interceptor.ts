import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';

@Injectable()
export class AutorizationInterceptor implements HttpInterceptor {
  constructor() {}
  newReq!: HttpRequest<any>;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      take(1),
      switchMap(() => {
        const token: any = localStorage.getItem('userToken');
        console.log(token);
        if (token) {
          const accessToken = JSON.parse(token);
          console.log(accessToken.accessToken);

          if (accessToken) {
            this.newReq = request.clone({
              setHeaders: {
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTAxNTg0NzAsImV4cCI6MTcxMDI0NDg3MCwic3ViIjoiOTNhNGIwOTEtMDRjMy00NTFkLTk5NDUtY2IxMThkOTg1OTI2In0.pYLHTo8820MeGa4MgEBottG2X_XlwYljjGmGQ75fOW'}`,
              },
            });
          } else {
            this.newReq = request;
          }
        } else {
          this.newReq = request;
        }

        return next.handle(this.newReq);
      })
    );
  }
}
