import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { authRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state/auth.effects";


@NgModule({
    declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        authRoutingModule,
        ReactiveFormsModule,
        EffectsModule.forFeature([AuthEffects]),
    ]
})

export class AuthModule {}