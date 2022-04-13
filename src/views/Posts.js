import React, { useState } from 'react';
import PostCard from '../components/PostCard';

export default function Posts(props) {
    const [posts, setPosts] = useState([1, 2, 3, 4, 5]);
    return (
        <>
        <h1 className='text-center mt-3'>Posts</h1>
        {posts.map((p, i) => <PostCard key={i} post={p} />)}
        </>
    )
}
