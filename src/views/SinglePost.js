import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard';

export default function SinglePost(props) {
    const { postId } = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <PostCard post={post} />
    )
}
