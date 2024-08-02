import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CounterState } from "./counter.state"

const getCounter = createFeatureSelector<CounterState>('counter')

export const selectCount = createSelector(
    getCounter,
    (state) => state.counter
)

export const selectChannel = createSelector(
    getCounter, 
    (state) => state.channelName
)