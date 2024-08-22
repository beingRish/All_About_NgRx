import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./couter/couter.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../services/auth.guard";

const routes: Routes = [
    {
        path: 'counter',
        component: CounterComponent,
        canActivate: [AuthGuard]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class CounterRoutingModule { }
