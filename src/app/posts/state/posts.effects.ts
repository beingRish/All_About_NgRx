import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { loadPosts, loadPostsSuccess } from "./posts.action";
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
}