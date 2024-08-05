import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { authRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./state/auth.selector";
import { AuthReducer } from "./state/auth.reducer";


@NgModule({
    declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        authRoutingModule,
        ReactiveFormsModule,
        StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer)
    ]
})

export class AuthModule {}