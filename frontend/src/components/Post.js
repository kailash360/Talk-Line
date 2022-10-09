import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Post = () => {
    const { id } = useParams()
    const { postList } = useOutletContext()   /* remove if using a global provider */
    const currentPost = postList.find(post => post.id === id)
    return (
        <div>
            <h2>Post id : {currentPost.id} </h2>
            <p>{currentPost.body}</p>
        </div>
    )
}

export default Post