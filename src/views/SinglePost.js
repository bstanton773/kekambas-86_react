import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';

export default function SinglePost(props) {
    const { postId } = useParams();
    const [post, setPost] = useState({})
    const [editMode, setEditMode] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const handleEditSubmit = (e) => {
        e.preventDefault();

        if (!props.loggedIn){
            props.flashMessage('You must be logged in to edit a post', 'danger')
            navigate('/login')
        }

        let myHeaders = new Headers();
        let myToken = localStorage.getItem('token');
        myHeaders.append('Authorization', `Bearer ${myToken}`)
        myHeaders.append('Content-Type', 'application/json')

        let title = e.target.title.value;
        let body = e.target.body.value;
        console.log(title)

        let data = JSON.stringify({title, body})

        fetch(`http://localhost:5000/api/edit-posts/${postId}`, {
            method: 'PUT',
            headers: myHeaders,
            body: data
        }).then(res => res.json())
            .then(data => {
                if (data.error){
                    props.flashMessage(data.error, 'danger')
                }else{
                    props.flashMessage(`${data.title} has been updated`, 'secondary')
                    setPost(data)
                }
            })
    }

    return (
        <>
            <PostCard post={post} />
            <button className='btn btn-info w-50' onClick={() => setEditMode(!editMode)}>Edit</button>
            <button className='btn btn-danger w-50'>Delete</button>
            {editMode ? (
                <form className='mt-5' onSubmit={handleEditSubmit}>
                    <h3 className='text-center'>Edit {post.title}</h3>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title' className='form-control' defaultValue={post.title} />
                        <label htmlFor='body'>Body</label>
                        <input type='text' name='body' className='form-control' defaultValue={post.body} />
                        <input type='submit' className='btn btn-primary w-100' value='Edit Post' />
                    </div>
                </form>
            ): null}
        </>
    )
}
