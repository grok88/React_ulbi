import axios from "axios";

export const PostsAPI = {
    async getPosts(limit = 10, pages = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params:{
            _limit: limit,
            _page: pages
        }
        })
        return response;
    },
    async getPostById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
            params:{id}
        }).then(res => res.data)
        return response;
    },
    async getPostComments(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.data)
        return response;
    }
}