import {useEffect, useState} from 'react'
import {useParams} from "react-router"
import PostClient from "../../clients/postClient.js"

const PostPage = () => {
    let { postId } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        PostClient.getPost(postId).then(incomingPost => setPost(incomingPost.json.response))
    }, [setPost, postId])

    return (
        <div>
            <div>Hi</div>
            <div>{post}</div>
        </div>
    )
  }
  
export default PostPage
