import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostsRoutingModule } from "./posts-routing.module";

@NgModule({
    declarations: [
        PostsListComponent,
        AddPostComponent,
        EditPostComponent,
    ],
    imports: [
        CommonModule,
        PostsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})

export class postsModule {}