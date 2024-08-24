import { Injectable } from "@angular/core";
import { PostsService } from "src/app/services/posts.service";
import { Update } from "@ngrx/entity";
import { Post } from "src/app/models/posts.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { getPosts } from "./posts.selector";
import { dummyAction } from "src/app/auth/state/auth.action";

import { 
    ROUTER_NAVIGATION, 
    RouterNavigatedAction 
} from "@ngrx/router-store";

import { 
    Actions, 
    createEffect, 
    ofType 
} from "@ngrx/effects";

import { 
    EMPTY, 
    filter, 
    map, 
    mergeMap, 
    of, 
    switchMap, 
    withLatestFrom 
} from "rxjs";

import { 
    addPost, 
    addPostSuccess, 
    deletePost, 
    deletePostSuccess, 
    loadPosts, 
    loadPostsSuccess, 
    updatePost, 
    updatePostSuccess 
} from "./posts.action";

@Injectable()

export class PostsEffects {
    constructor(
        private actions$: Actions,
        private postsService: PostsService,
        private store: Store<AppState>
    ) { }

    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPosts),
            withLatestFrom(this.store.select(getPosts)),
            mergeMap(([action, posts]) => {
                if(!posts.length){
                    return this.postsService.getPosts().pipe(
                        map(posts => {
                            return loadPostsSuccess({ posts })
                        })
                    )
                }
                return of(dummyAction());
            })
        )
    })

    addPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPost),
            mergeMap(action => {
                return this.postsService.addPost(action.post).pipe(
                    map(data => {
                        const post = { ...action.post, id: data.name }
                        return addPostSuccess({ post })
                    })
                )
            })
        )
    })

    updatePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePost),
            switchMap(action => {
                return this.postsService.updatePost(action.post)
                    .pipe(
                        map(() => {
                            const updatedPost: Update<Post> = {
                                id: action.post.id,
                                changes: {
                                    ...action.post
                                }
                            }
                            return updatePostSuccess({ post: updatedPost })
                        })
                    );
            })
        )
    })

    deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePost),
            switchMap(action => {
                return this.postsService.deletePost(action.id)
                    .pipe(
                        map(data => {
                            return deletePostSuccess({ id: action.id })
                        })
                    );
            })
        )
    });

    getSinglePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ROUTER_NAVIGATION),
            filter((r: RouterNavigatedAction) => {
                return r.payload.routerState.url.startsWith('/posts/details')
            }),
            map((r: RouterNavigatedAction) => {
                const params = r?.payload?.routerState?.root?.firstChild?.params;
                return params?.["id"];
            }),
            withLatestFrom(this.store.select(getPosts)),
            switchMap(([id, posts]) => {
                if(!posts.length || posts.length === 1 ){
                    if (id) {
                        return this.postsService.getPosts().pipe(
                            map(post => loadPostsSuccess({ posts: post })) 
                        );
                    } else {
                        return EMPTY;
                    }
                }
                return of(dummyAction())
            })
        )
    })

}