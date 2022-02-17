import React, { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import { getTags, deleteTag } from "./TagManager"

export const TagList = (props) => {
    const [tags, setTags] = useState([])

    const history = useHistory()

    useEffect(() => {
        getTags().then(data => setTags(data))
    }, [])

    return (
        <div style={{ margin: "0rem 3rem" }}>
            <h1>Tags</h1>

            <div className="tags">
                {
                    tags.map(tag => {
                        return <div key={`tag--${tag.id}`} style={{ width: `18rem` }}>
                                    <h2>{tag.label}</h2>
                                    <button onClick={() => {
                                if (confirm('Are you sure you want to delete this tag?') == true)
                                    deleteTag(tag, tag.id)
                                        .then(response => setTags(response))
                            }}>
                                Delete Tag
                            </button>
                                </div>
                               
                    })
                }
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/tags/new" })
                    }}
                    >Create New Tag</button>
            </div>
        </div>
    )
}