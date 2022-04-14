import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost(props) {
    let navigate = useNavigate();

    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You must be logged in to create a post', 'danger')
            navigate('/login')
        }
    }, [props.loggedIn])

    const handleSubmit = (e) => {
        e.preventDefault();

        let myHeaders = new Headers();
        let myToken = localStorage.getItem('token');
        myHeaders.append('Authorization', `Bearer ${myToken}`)
        myHeaders.append('Content-Type', 'application/json')

        let title = e.target.title.value;
        let body = e.target.body.value;

        let data = JSON.stringify({title, body})

        fetch('http://localhost:5000/api/posts/create', {
            method: 'POST',
            headers: myHeaders,
            body: data
        }).then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    props.flashMessage(`The post ${data.title} has been created`, 'success')
                    navigate('/blog')
                }
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className='text-center'>Create New Post</h3>
            <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' className='form-control' placeholder='Enter Title Here' />
                <label htmlFor='body'>Body</label>
                <input type='text' name='body' className='form-control' placeholder='Enter Body Here' />
                <input type='submit' className='btn btn-primary w-100' value='Create Post' />
            </div>
        </form>
    )
}
