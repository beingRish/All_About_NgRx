import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsAdapter, PostsState } from "./posts.state";
import { getCurrentRoute } from "../../store/router/router.selector"
import { RouterStateUrl } from "src/app/store/router/custom-serializer";

export const POST_STATE_NAME = 'posts';

const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const postSelectors = postsAdapter.getSelectors();


export const getPosts = createSelector(
    getPostsState, postSelectors.selectAll
);

export const getPostEntities = createSelector(
    getPostsState,
    postSelectors.selectEntities
)

export const getPostById = createSelector(
    getPostEntities,
    getCurrentRoute,
    (posts, route: RouterStateUrl) => {
        return posts ? posts[route.params['id']] : null;
    }
);