import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AuthGuard } from "../services/auth.guard";

const routes: Routes = [
    {
        path: 'posts',
        component: PostsListComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'add',
                component: AddPostComponent
            },
            {
                path: 'edit/:id',
                component: EditPostComponent
            },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }
