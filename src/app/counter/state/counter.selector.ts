import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CounterState } from "./counter.state"

export const COUNTER_STATE_NAME = 'counter'

const getCounter = createFeatureSelector<CounterState>(COUNTER_STATE_NAME)

export const selectCount = createSelector(
    getCounter,
    (state) => state.counter
)

export const selectChannel = createSelector(
    getCounter, 
    (state) => state.channelName
)