import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { updatePost, getPostById, getCategories } from './FeedManager.js'

export const UpdatePost = () => {
    const history = useHistory()
    const {postId} = useParams()
    const [categories, setCategories] = useState([])

    const [currentPost, setCurrentPost] = useState({
        title: "",
        publication_date: "",
        image_url: null,
        content: "",
        approved: true,
        user: 1,
        category: 1,
        tags: []
    })

    useEffect(() => {
        getPostById(postId).then(postData => setCurrentPost({
            title: postData.title,
            publication_date: postData.publication_date,
            image_url: postData.image_url,
            content: postData.content,
            approved: postData.approved,
            user: postData.user,
            category: postData.category,
            tags: postData.tags,}))
            .then(getCategories().then(data => setCategories(data)))
    }, [postId])

    const changeUpdatedPost = (domEvent) => {
        domEvent.preventDefault()
        const copy = { ...currentPost }
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentPost(copy)
    }

    return (
        <form className="updateForm">
            <h2 className="updateForm__title">Edit the Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentPost.title}
                        onChange={changeUpdatedPost}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="publication_date">Published on: </label>
                    <input type="date" name="publication_date" required autoFocus className="form-control"
                        value={currentPost.publication_date}
                        onChange={changeUpdatedPost}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image_url">Image: </label>
                    <input type="text" name="image_url" required autoFocus className="form-control"
                        value={currentPost.image_url}
                        onChange={changeUpdatedPost}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Dat Juicy Content: </label>
                    <input type="text" name="content" required autoFocus className="form-control"
                        value={currentPost.content}
                        onChange={changeUpdatedPost}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Category: </label>
                    <select name="category" required autoFocus className="form-control"
                        value={currentPost.category}
                        onChange={changeUpdatedPost}>
                        <option value="0"> Select a Category</option>
                        {
                            categories.map(cat => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const post = {
                        title: currentPost.title,
                        publication_date: currentPost.publication_date,
                        image_url: currentPost.image_url,
                        content: currentPost.content,
                        approved: currentPost.approved,
                        user: currentPost.user.id,
                        category: currentPost.category,
                        tags: currentPost.tags
                    }

                    // Send POST request to your API
                    updatePost(post, postId)
                        .then(() => history.push(`/posts/${postId}`))
                }}
                className="btn btn-primary">Save Post</button>
            <button type="cancel" onClick={() => {
                history.push("/posts")
            }}>Cancel</button>
        </form>
    )
}
