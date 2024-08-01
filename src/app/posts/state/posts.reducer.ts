import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost, updatePost } from "./posts.action";
import { Post } from "src/app/models/posts.model";



const _postsReducer = createReducer(
    initialState, 

    // addPost
    on(addPost, (state: any, action: any) => {
        const post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post],
        }
    }),

    // updatePost
    on(updatePost, (state: any, action: any) => {
        const updatedPosts = state.posts.map((post: Post) => {
            return action.post.id === post.id ? action.post : post
        });
        return {
            ...state,
            posts: updatedPosts,
        }
    })
);

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action);
}