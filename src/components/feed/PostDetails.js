import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "./FeedManager"


export const PostDetails = () => {
    const [postD, setPostD] = useState({})
    const { postId } = useParams()

    useEffect(
        () => {
            getPostById(postId).then(data => setPostD(data))
                },
                [postId])
        

    return (
        <>
            <section className="postD_Id" key={postId}> 
                <img src={postD.image_url} />
                <h3 className="postD__title">Title: {postD.title}</h3>
                <div className="postD__author">Author: {postD.user}</div>
                <div className="postD__publicationDate">Publication Date: {postD.publication_date}</div>
                <div className="postD__content">Content: {postD.content}</div>
                <div className="postD__category">Category: {postD.category}</div>
                <div className="postD__tags">Tags: {postD.tags}</div>
            </section>
        </>
    )
}    