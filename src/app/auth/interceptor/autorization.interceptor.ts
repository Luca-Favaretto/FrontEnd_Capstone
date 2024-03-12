import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable()
export class AutorizationInterceptor implements HttpInterceptor {
  newReq!: HttpRequest<any>;
  constructor(private authSrv: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.authSrv.user.pipe(
      take(1),
      switchMap(() => {
        const token: any = localStorage.getItem('userToken');

        if (token) {
          const accessToken = JSON.parse(token);
          if (accessToken) {
            this.newReq = request.clone({
              headers: request.headers.set(
                'Authorization',
                `Bearer ${accessToken.accessToken}`
              ),
            });
          } else {
            this.newReq = request;
          }
        } else {
          this.newReq = request;
        }
        console.log(this.newReq);

        return next.handle(this.newReq);
      })
    );
  }
}
