import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CounterComponent } from "./couter/couter.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { CounterRoutingModule } from "./counter-routing.module";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";
import { COUNTER_STATE_NAME } from "./state/counter.selector";

@NgModule({
    declarations: [
        CounterComponent,
        CustomCounterInputComponent,
    ],
    imports: [
        CommonModule,
        CounterRoutingModule,
        FormsModule,
        StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
    ]
})

export class CounterModule { }
