import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CounterComponent } from "./couter/couter.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { CounterRoutingModule } from "./counter-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        CounterComponent,
        CustomCounterInputComponent,
    ],
    imports: [
        CommonModule,
        CounterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})

export class CounterModule { }
