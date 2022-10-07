import { Link, useOutletContext } from 'react-router-dom'

const Feed = () => {
    const { postList } = useOutletContext(); /* remove if using a global provider */
    return (
        <div>
            <ul>
                {postList.map(post => <li key={post.id}><Link to={`/posts/${post.id}`}>{post.preview}</Link></li>)}
            </ul>
        </div>
    )
}

export default Feed