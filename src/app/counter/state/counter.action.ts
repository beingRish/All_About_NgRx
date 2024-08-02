import { createAction, props } from "@ngrx/store";

export const increament = createAction('[Counter Component] Increment')
export const decrement = createAction('[Counter Component] Decrement')
export const reset = createAction('[Counter Component] Reset')

export const customincrement = createAction(
    'customincrement', 
    props<{count: number}>()
);

export const changeChannelName = createAction('changeChannelName');