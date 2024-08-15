import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPosts, loadPostsSuccess, updatePost, updatePostSuccess } from "./posts.action";
import { map, mergeMap, switchMap } from "rxjs";

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

    updatePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePost),
            switchMap(action => {
                return this.postsSevice.updatePost(action.post)
                    .pipe(
                        map(data => {
                            return updatePostSuccess({ post: action.post })
                        })
                    );
            })
        )
    })

    deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePost),
            switchMap(action => {
                return this.postsSevice.deletePost(action.id)
                    .pipe(
                        map(data => {
                            return deletePostSuccess({ id: action.id })
                        })
                    );
            })
        )
    })

}