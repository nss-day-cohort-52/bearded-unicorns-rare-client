import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { addPost, getPostById, getCategories } from './FeedManager.js'


export const PostForm = () => {
    const history = useHistory()
    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])
    const { postId } = useParams()


    const [currentPost, setCurrentPost] = useState({
        title: "",
        // publication_date: "",
        image_url: null,
        content: "",
        approved: true,
        user: 1,
        category: 1,
        tags: []
    })



    useEffect(() => {
        getCategories().then(categories => setCategories(categories))
    }, [])



    const changePostState = (domEvent) => {
        domEvent.preventDefault()
        const copy = { ...currentPost }
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentPost(copy)
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">Make a new post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentPost.title}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="publication_date">Published on: </label>
                    <input type="date" name="publication_date" required autoFocus className="form-control"
                        value={currentPost.publication_date}
                        onChange={changePostState}
                    />
                </div>
            </fieldset> */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image_url">Image: </label>
                    <input type="text" name="image_url" required autoFocus className="form-control"
                        value={currentPost.image_url}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Dat Juicy Content: </label>
                    <input type="text" name="content" required autoFocus className="form-control"
                        value={currentPost.content}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Category: </label>
                    <select name="category" required autoFocus className="form-control"
                        value={currentPost.category}
                        onChange={changePostState}>
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
                        // publication_date: currentPost.publication_date,
                        image_url: currentPost.image_url,
                        content: currentPost.content,
                        approved: currentPost.approved,
                        user: currentPost.user,
                        category: currentPost.category,
                        tags: currentPost.tags
                    }

                    // Send POST request to your API
                    addPost(post)
                        .then(res => res.json())
                        .then((data) => history.push(`/posts/${data.id}`))
                }}
                className="btn btn-primary">Save Post</button>
        </form>
    )
}