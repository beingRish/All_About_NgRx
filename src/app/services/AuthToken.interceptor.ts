import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { exhaustMap, Observable, take } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { getToken } from "../auth/state/auth.selector";

@Injectable()

export class AuthTokenInterceptor implements HttpInterceptor {

    constructor(private store: Store<AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select(getToken).pipe(
            exhaustMap(token => {
                if (token) {
                    const modifiedReq = req.clone({
                        params:  new HttpParams().set('auth', token)
                    });
                    return next.handle(modifiedReq);
                } else {
                    return next.handle(req);
                }
            })
        );
    }
}