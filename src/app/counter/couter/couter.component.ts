import { Component } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../state/counter.selector';
import { decrement, increament, reset } from '../state/counter.action';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.css']
})
export class CounterComponent {
  count$:any;
  constructor(private store: Store<CounterState>){
    this.count$ = this.store.select(selectCount);
  }
  increment(){
    this.store.dispatch(increament())
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
}
