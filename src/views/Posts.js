import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

export default function Posts(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://kekambas-bs.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
    }, [])
    return (
        <>
        <h1 className='text-center mt-3'>Posts</h1>
        {posts.map((p, i) => <PostCard key={i} post={p} />)}
        </>
    )
}
