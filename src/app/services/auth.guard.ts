import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map, tap } from "rxjs";
import { AppState } from "../store/app.state";
import { isAuthenticated } from "../auth/state/auth.selector";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> | Observable<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(isAuthenticated).pipe(
      tap(authenticate => {
      }),
      map(authenticate => {
        if (!authenticate) {
          return this.router.createUrlTree(['auth']);
        }
        return true
      })
    )
  }
}