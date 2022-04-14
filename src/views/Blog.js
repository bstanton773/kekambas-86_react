import React, { useState, useEffect } from 'react'
import PostCard from '../components/PostCard';

export default function Blog(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <>
            <h1 className='text-center'>Kekambas Blog</h1>
            <hr></hr>
            {posts.map(p => <PostCard post={p} key={p.id} />)}
        </>
    )
}
