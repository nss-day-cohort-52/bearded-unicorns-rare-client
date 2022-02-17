import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { updateTag, getTagById } from './TagManager.js'

export const EditTag = () => {
    const history = useHistory()
    const {tagId} = useParams()

    const [currentTag, setCurrentTag] = useState({
        label: ""    
})
    
    useEffect(() => {
        getTagById(tagId).then(tagData => setCurrentTag({
            label: tagData.label
        }))
    }, [tagId])

    const changeUpdatedTag = (domTag) => {
        const copy = {...currentTag}
        copy[domTag.target.name] = domTag.target.value
        setCurrentTag(copy)
    }

    return (
        <form className="tagForm">
            <h2 className="tagForm__title">Edit Tag</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">What's Your New Tag: </label>
                    <input type="text" name="label" required autoFocus className="form-control"
                        value={currentTag.label}
                        onChange={changeUpdatedTag}
                    />
                </div>
            </fieldset>

            <button type="save"
                onClick={evt => {
                    evt.preventDefault()

                    const tag = {
                        label: currentTag.label
                    }

                    updateTag(tag, tagId)
                    .then(() => history.push("/tags"))
                }}
                className="btn btn-primary">Save</button>
                <button type="cancel" onClick={() => {
                    history.push("/tags")
                }}>Cancel</button>
        </form>
    )
}