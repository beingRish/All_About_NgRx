import { createReducer, on } from "@ngrx/store"
import { Counter } from "src/app/models/counter.model"
import { changeChannelName, customincrement, decrement, increament, reset } from "./counter.action"

export const initialCounterState: Counter = {
    counter: 0,
    channelName: 'Leela Web Dev'
}

export const counterReducer = createReducer(
    initialCounterState,
    on(increament, state => ({...state, counter: state.counter + 1})),
    on(decrement, state => ({...state, counter: state.counter - 1})),
    on(reset, state => ({...state, counter: 0})),
    on(customincrement, (state, action) => ({...state, counter:  state.counter + action.count})),
    on(changeChannelName, (state) => ({...state, channelName: 'Modified Leela Web Dev'}))
)