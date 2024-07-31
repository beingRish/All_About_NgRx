import { Post } from "src/app/models/posts.model";


export interface PostsState {
    posts: Post[];
}


export const initialState = {
    posts: [
        {id: '1', title: 'Sample Title 1', description: 'Sample Descrioption 1'},
        {id: '2', title: 'Sample Title 2', description: 'Sample Descrioption 2'},
        {id: '3', title: 'Sample Title 3', description: 'Sample Descrioption 3'},
        {id: '4', title: 'Sample Title 4', description: 'Sample Descrioption 4'},
        {id: '5', title: 'Sample Title 5', description: 'Sample Descrioption 5'},
        {id: '6', title: 'Sample Title 6', description: 'Sample Descrioption 6'},
        {id: '7', title: 'Sample Title 7', description: 'Sample Descrioption 7'},
        {id: '8', title: 'Sample Title 8', description: 'Sample Descrioption 8'},
    
    ]
}