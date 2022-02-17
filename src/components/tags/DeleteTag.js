import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { deleteTag } from './TagManager.js'

export const DeleteTag = () => {
    const history = useHistory()

    const [currentTag, setCurrentTag] = useState({
        label: ""
    
})

    const changeTagState = (domTag) => {
        const copy = {...currentTag}
        copy[domTag.target.name] = domTag.target.value
        setCurrentTag(copy)
    }

    return (
        <form className="tagForm">
            <h2 className="tagForm__title">Create Tag</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">What's Your Tag: </label>
                    <input type="text" name="label" required autoFocus className="form-control"
                        value={currentTag.label}
                        onChange={changeTagState}
                    />
                </div>
            </fieldset>

            <button type="save"
                onClick={evt => {
                    evt.preventDefault()

                    const tag = {
                        label: currentTag.label
                    }

                    createTag(tag)
                    .then(() => history.push("/tags"))
                }}
                className="btn btn-primary">Save</button>
        </form>
    )
}