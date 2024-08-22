import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Post } from "../models/posts.model";

@Injectable({
    providedIn: 'root',
})

export class PostsService {
    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http
            .get<Post[]>(`https://all-about-ngrs-default-rtdb.firebaseio.com/posts.json`)
            .pipe(
                map(data => {
                    const posts: Post[] = [];
                    for (let key in data) {
                        posts.push({ ...data[key], id: key })
                    }
                    return posts;
                })
            );
    }

    addPost(post: Post): Observable<{ name: string }> {
        return this.http.post<{ name: string }>(
            `https://all-about-ngrs-default-rtdb.firebaseio.com/posts.json`,
            post
        )
    }

    updatePost(post: Post | any) {
        const postData = {
            [post.id]: { title: post.title, description: post.description }
        };

        return this.http.put(
            `https://all-about-ngrs-default-rtdb.firebaseio.com/posts.json`,
            postData
        )
    }

    deletePost(id: string){
        return this.http.delete(
            `https://all-about-ngrs-default-rtdb.firebaseio.com/posts/${id}.json`
        )
    }

    getPostById(id: string): Observable<Post>{
        return this.http.get<Post>(
            `https://all-about-ngrs-default-rtdb.firebaseio.com/posts/${id}.json`
        )
    }
}