import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { authRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        authRoutingModule,
        ReactiveFormsModule
    ]
})

export class AuthModule {}