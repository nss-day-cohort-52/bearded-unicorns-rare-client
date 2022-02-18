import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createComment, getComments } from "./CommentManager"



export const CommentForm = () => {
    const history = useHistory()
    const [comments, setComments] = useState([])

    const [currentComment, setCurrentComment] = useState({
        content: "",
        user: 1
    })

    useEffect(() => {
        getComments().then(comments => setComments(comments))
    }, [])

    const changeCommentState = (domEvent) => {
        domEvent.preventDefault()
        const copy = { ...currentComment }
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentComment(copy)
    }

    return (
        <form className="commentForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="comment">Write your comment: </label>
                    <input type="text" name="comment" required autoFocus className="form-control"
                        value={currentComment.content}
                        onChange={changeCommentState}
                    />
                </div>
            </fieldset>
            <button type="submit" 
            onClick={evt => {
                evt.preventDefault()
                const comment = {
                    content: currentComment.content,
                    user: currentComment.user
                }

                createComment(comment)
                .then(res => res.json())
            }}
            className="btn btn-primary">Submit comment</button>
        </form>
    )
}