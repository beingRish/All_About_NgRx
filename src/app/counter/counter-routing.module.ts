import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./couter/couter.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: 'counter',
        component: CounterComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CounterRoutingModule { }
