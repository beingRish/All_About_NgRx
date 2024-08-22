import { ActionReducerMap } from "@ngrx/store";
import { AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { SharedReducer } from "./Shared/shared.reducer";
import { SHARED_STATE_NAME } from "./Shared/shared.selector";
import { SharedState } from "./Shared/shared.state";
import { RouterReducerState, routerReducer } from "@ngrx/router-store";

export interface AppState {
    [SHARED_STATE_NAME]: SharedState;
    [AUTH_STATE_NAME]: AuthState;
    router: RouterReducerState
}

export const appReducer: ActionReducerMap<AppState> = {
    [SHARED_STATE_NAME]: SharedReducer,
    [AUTH_STATE_NAME]: AuthReducer,
    router: routerReducer
}