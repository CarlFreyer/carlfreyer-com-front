import restClient from "./restClient";

const POSTS_URI = import.meta.env.VITE_BACKEND_BASE_URI + import.meta.env.VITE_BACKEND_POSTS_URI

const getPost = async (postId) => {
    console.log(POSTS_URI)
    const post = await restClient.fetchRequest(POSTS_URI + "/" + postId);
    if(post.status != 200){
        return {json: {
            response: "error"
        }}
    }
    return post
}

export default {
    getPost
}