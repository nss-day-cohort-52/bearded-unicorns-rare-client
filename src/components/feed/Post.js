import React from "react"
import "./Post.css"
import { Link } from "react-router-dom"

export default ({ post }) => (
    <section className="post">
        <h3 className="post__name">
            <Link to={`/posts/${post.id}`}>
                { post.title }
            </Link>
        </h3>
        <div className="post__content">{ post.content }</div>
    </section>
)