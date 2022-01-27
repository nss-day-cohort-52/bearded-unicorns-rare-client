import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const PostDetails = () => {
    const [postD, setPostD] = useState({})
    const { postId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}`)
                .then(res => res.json())
                .then((data) => {
                    setPostD(data)
                })
        },
        [ postId ]
    )

    return (
        <>
            <section className="postD_Id" key={postId}> 
                <h3 className="postD__title">Title: {postD.title}</h3>
                <div className="postD__author">Author: {postD.user?.first_name} {postD.user?.last_name}</div>
                <div className="postD__category">Category: {postD.category?.label}</div>
                <div className="postD__publicationDate">Publication Date: {postD.publication_date}</div>
                <div className="postD__content">Content: {postD.content}</div>
            </section>
        </>
    )
}    