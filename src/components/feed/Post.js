import React from "react"
import "./Post.css"
import { Link } from "react-router-dom"

export default ({ post }) => (
    <section class="section">
        <div class="level-item has-text-centered">
            <Link to={`/posts/${post.id}`}>
                { post.title }
            </Link>
        </div>
        <div class="level-item has-text-centered">{ post.user.first_name }</div> 
        <div class="level-item has-text-centered">{post.user.last_name}</div>
        <div class="level-item has-text-centered">{post.publication_date} </div>
        <div class="level-item has-text-centered">{post.category.label}</div>
    </section>
)