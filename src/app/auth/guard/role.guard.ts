import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  me: User | undefined;
  constructor(private userSrv: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.userSrv.getMe().pipe(
      map((user: User | undefined) => {
        if (
          user &&
          user.roles.some((role) =>
            route.data['expectedRole'].includes(role.role)
          )
        ) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
