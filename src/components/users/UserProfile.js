import React, { useEffect, useState } from "react"
import { getUserById } from "./UserManager"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export const UserProfile = () => {
    const [user, setUser] = useState({})
    const { userId } = useParams()

    useEffect(
        () => {
            getUserById(userId).then(data => setUser(data))
        },
        [userId]
    )

    return (
        <>
            <section className="userId" key={userId}>
                <h3 className="user__userName">User Name: {user.user?.username}</h3>
                <div className="user__first_name">First Name: {user.user?.first_name}</div>
                <div className="user__last_name">Last Name: {user.user?.last_name}</div>
                <div className="user__email">Email: {user.user?.email}</div>
                <div className="user__bio">Bio: {user.bio}</div>
                <div className="user___image_url">Picture: {user.profile_image_url}</div>
                <div className="user__created_on">Created On: {user.created_on}</div>
                <div className="user__active">Status: {user.active}</div>           
            </section>
        </>
    )
}    