import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const UserPosts = () => {
    const [userPosts, setUserPost] = useState({})
    const { postUserId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postUserId}`)
                .then(res => res.json())
                .then((data) => {
                    setUserPost(data)
                })
        },
        [ postUserId ]
    )

    return (
        <>
            <section className="userPostId">
                <h3 className="userPosts__title">{userPosts.posts?.title}</h3>       
            </section>
        </>
    )
}  