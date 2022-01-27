import React from "react"
import "./Post.css"
import { Link } from "react-router-dom"

export default ({ post }) => (
    <section className="post">
        <div className="post_item">
            <Link to={`/posts/${post.id}`}>
                { post.title }
            </Link>
        </div>
        <div className="post_item">{ post.user.first_name }</div> 
        <div className="post_item">{post.user.last_name}</div>
        <div className="post_item">{post.publication_date} </div>
        <div className="post_item">{post.category.label}</div>
    </section>
)