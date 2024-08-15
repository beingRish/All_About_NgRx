import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { addPost, addPostSuccess, loadPosts, loadPostsSuccess } from "./posts.action";
import { map, mergeMap } from "rxjs";

@Injectable()

export class PostsEffects {
    constructor(
        private actions$: Actions,
        private postsSevice: PostsService
    ) { }

    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPosts),
            mergeMap(action => {
                return this.postsSevice.getPosts().pipe(
                    map(posts => {
                        return loadPostsSuccess({ posts })
                    })
                )
            })
        )
    })

    addPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPost),
            mergeMap(action => {
                return this.postsSevice.addPost(action.post).pipe(
                    map(data => {
                        const post = { ...action.post, id: data.name }
                        return addPostSuccess({ post })
                    })
                )
            })
        )
    })
}