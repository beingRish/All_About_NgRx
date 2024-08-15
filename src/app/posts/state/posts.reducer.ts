import { createReducer, on, State } from "@ngrx/store";
import { initialState } from "./posts.state";
import { Post } from "src/app/models/posts.model";
import {  
    addPostSuccess, 
    deletePost, 
    loadPostsSuccess, 
    updatePost 
} from "./posts.action";



const _postsReducer = createReducer(
    initialState, 

    // addPostSuccess
    on(addPostSuccess, (state: any, action: any) => {
        const post = {...action.post};
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
    }),

    // deletePost
    on(deletePost, (state: any,  { id }) => {
        const updatePost = state.posts.filter((post: { id: string; }) => {
            return post.id !== id;
        })
        return {
            ...state,
            posts: updatePost,
        } 
    }),

    // loadPosts
    on(loadPostsSuccess, (state: any, action) => {
        return {
            ...state,
            posts: action.posts
        }
    })
);

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action);
}