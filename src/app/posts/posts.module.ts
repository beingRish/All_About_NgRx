import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PostsRoutingModule } from "./posts-routing.module";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/posts.reducer";
import { POST_STATE_NAME } from "./state/posts.selector";
import { EffectsModule } from "@ngrx/effects";
import { PostsEffects } from "./state/posts.effects";

@NgModule({
    declarations: [
        PostsListComponent,
        AddPostComponent,
        EditPostComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PostsRoutingModule,
        StoreModule.forFeature(POST_STATE_NAME, postsReducer),
        EffectsModule.forFeature([PostsEffects])
    ],
})

export class postsModule {}