import React from 'react'

export default function PostCard(props) {
    const post = props.post
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">By: {post.user.first_name} {post.user.last_name}</h6>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    )
}
