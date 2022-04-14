import React, { useState, useEffect } from 'react'
import PostCard from '../components/PostCard';

export default function Blog(props) {
    const [posts, setPosts] = useState([]);

    const sortingMethods = {
        byDateAsc: (a, b) => new Date(a.date_created) - new Date(b.date_created),
        byDateDesc: (a, b) => new Date(b.date_created) - new Date(a.date_created),
        byTitleAsc: (a, b) => a.title > b.title ? 1 : -1,
        byTitleDesc: (a, b) => a.title > b.title ? -1 : 1
    }

    const sortPosts = (method) => {
        console.log(method)
        console.log(sortingMethods[method])
        let sortedPosts = [...posts].sort(sortingMethods[method])
        setPosts(sortedPosts)
    }


    useEffect(() => {
        fetch('http://localhost:5000/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <>
            <h1 className='text-center'>Kekambas Blog</h1>
            <hr></hr>
            <div className='row'>
                <div className='offset-8 col-4'>
                    <select onChange={(e)=>sortPosts(e.target.value)} className="form-select" aria-label="Default select example">
                        <option>Sort Posts</option>
                        <option value="byDateAsc">By Date Ascending</option>
                        <option value="byDateDesc">By Date Descending</option>
                        <option value="byTitleAsc">By Title Ascending</option>
                        <option value="byTitleDesc">By Title Descending</option>
                    </select>
                </div>
            </div>
            {posts.map(p => <PostCard post={p} key={p.id} />)}
        </>
    )
}
