import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { addPost, getPostById } from './FeedManager.js'


export const PostForm = () => {
    const history = useHistory()
    const [posts, setPosts] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentPost, setCurrentPost] = useState({
        title: "",
        publication_date: "",
        image_url: null,
        content: "",
        approved: true,
        user: 0,
        category: 0,
        tags: []
    })

    useEffect(() => {
        getPostById().then(postId => setPosts(postId))
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
                    <label htmlFor="publication_date">Published on: </label>
                    <input type="text" name="publication_date" required autoFocus className="form-control"
                        value={currentPost.publication_date}
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
                    <label htmlFor="content">Dat Juice: </label>
                    <input type="text" name="content" required autoFocus className="form-control"
                        value={currentPost.content}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="user">By: </label>
                    <select name="user" required autoFocus className="form-control"
                        value={currentPost.user}
                        onChange={changePostState}>
                        <option value="0"> Select a Game type</option>
                        {
                            gameTypes.map(gameType => (
                                <option key={gameType.id} value={gameType.id}>
                                    {gameType.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset> */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const post = {
                        id: currentPost.id,
                        title: currentPost.title,
                        publication_date: currentPost.publication_date,
                        image_url: null,
                        content: "",
                        approved: true,
                        user: 0,
                        category: 0,
                        tags: []
                    }

                    // Send POST request to your API
                    createPost(post)
                        .then(() => history.push("/posts"))
                }}
                className="btn btn-primary">Create Post</button>
        </form>
    )
}