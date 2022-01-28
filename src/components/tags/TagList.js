import React, { useState, useEffect } from "react"

export const TagList = () => {
    const [tags, setTags] = useState([])
    const [employees, setEmployees] = useState([])

    const getTags = () => {
        return fetch("http://localhost:8088/tags")
            .then(res => res.json())
    }
    useEffect(() => {
        getTags()
        .then(data => setTags(data))
    }, [])

    return (
        <div style={{ margin: "0rem 3rem" }}>
            <h1>Tags</h1>

            <div className="tags">
                {
                    tags.map(tag => {
                        return <article key={`tag--${tag.id}`} style={{ width: `18rem` }}>
                            <section>
                                    <h2>{tag.label}</h2>
                                <button>Edit</button>
                                <button>Delete</button>
                            </section>
        
                        </article>
                    })
                }
            </div>
        </div>
    )
}