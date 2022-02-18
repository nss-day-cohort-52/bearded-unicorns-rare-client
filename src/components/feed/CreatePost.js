import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { addPost, getPostById, getCategories, getTags } from './FeedManager.js'


export const PostForm = () => {
    const history = useHistory()
    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const { postId } = useParams()


    const [currentPost, setCurrentPost] = useState({
        title: "",
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

    useEffect(() => {
        getTags().then(tags => setTags(tags))
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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="tag">Tag: </label>
                    <select name="tag" required autoFocus className="form-control"
                        value={currentPost.tag}
                        onChange={changePostState}>
                        <option value="0">Select a Tag</option>
                        {
                            tags.map(tag => (
                                <option key={tag.id} value={tag.id}>
                                    {tag.label}
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