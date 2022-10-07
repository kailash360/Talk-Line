import { Link } from 'react-router-dom'
/*----- sample list of posts ------ */
const postList = [
    { id: "1", preview: "this is preview text for post 1", body: "this is post 1" },
    { id: "2", preview: "this is preview text for post 2", body: "this is post 2" },
    { id: "3", preview: "this is preview text for post 3", body: "this is post 3" },
    { id: "4", preview: "this is preview text for post 4", body: "this is post 4" },
]

const PostList = () => {
    return (
        <div>
            <ul>
                {postList.map(post => <li key={post.id}><Link to={`/posts/${post.id}`} state={{ postList }}>{post.preview}</Link></li>)}
            </ul>
        </div>
    )
}

export default PostList