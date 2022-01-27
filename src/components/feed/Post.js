import React from "react"
import "./Post.css"
import { Link } from "react-router-dom"

export default ({ post }) => (
    <section className="columns">
        <div className="column">
            <Link to={`/posts/${post.id}`}>
                { post.title }
            </Link>
        </div>
        <div className="column">{ post.user.first_name } {post.user.last_name}</div> 
        <div className="column">{post.publication_date} </div>
        <div className="column">{post.category.label}</div>
    </section>
)