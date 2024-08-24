import { createReducer, on } from "@ngrx/store";
import { initialState, postsAdapter } from "./posts.state";
import {
    addPostSuccess,
    deletePostSuccess,
    loadPostsSuccess,
    updatePostSuccess
} from "./posts.action";

const _postsReducer = createReducer(
    initialState,

    // addPostSuccess
    on(addPostSuccess, (state: any, action: any) => {
        return postsAdapter.addOne(
            action.post,
            {
                ...state,
                count: state.count + 1
            }
        );
    }),

    // updatePostSuccess
    on(updatePostSuccess, (state, action) => {
        return postsAdapter.updateOne(action.post, state);
    }),

    // deletePostSuccess
    on(deletePostSuccess, (state: any, { id }) => {
        return postsAdapter.removeOne(id, state);
    }),

    // loadPostsSuccess
    on(loadPostsSuccess, (state: any, action) => {
        return postsAdapter.setAll(action.posts, state)
    })
);

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action);
}