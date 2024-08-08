import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.action";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/Shared/shared.actions";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router
    ) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap(action => {
                return this.authService.login(
                    action.email,
                    action.password
                ).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        this.store.dispatch(setErrorMessage({ message: '' }))

                        const user = this.authService.formatUser(data);
                        return loginSuccess({ user });
                    }),
                    catchError(errResp => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        const errorMessage = this.authService.getErrorMessage(
                            errResp.error.error.message
                        )
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                )
            })
        )
    })

    loginRedirect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(...[loginSuccess, signupSuccess]),
                tap(action => {
                    this.store.dispatch(setErrorMessage({ message: '' }))
                    this.router.navigate(['/']);
                })
            )
        },
        { dispatch: false }
    );

    signUp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupStart),
            exhaustMap(action => {
                return this.authService.signUp(
                    action.email,
                    action.password
                ).pipe(
                    map(data => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        const user = this.authService.formatUser(data);
                        return signupSuccess({ user });
                    }),
                    catchError(errResp => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        const errorMessage = this.authService.getErrorMessage(
                            errResp.error.error.message
                        )
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                )
            })
        )
    })
}