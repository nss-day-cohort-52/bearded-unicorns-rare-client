import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const UserProfile = () => {
    const [userProfile, setUserProfile] = useState({})
    const { userProfileId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${userProfileId}`)
                .then(res => res.json())
                .then((data) => {
                    setUserProfile(data)
                })
        },
        [ userProfileId ]
    )

    return (
        <>
            <section className="userProfileId">
                <h3 className="userProfile__userName">User Name: {userProfile.username}</h3>
                <div className="userProfile__first_name">First Name: {userProfile.first_name}</div>
                <div className="userProfile__last_name">Last Name: {userProfile.last_name}</div>
                <div className="userProfile__email">Email: {userProfile.email}</div>
                <div className="userProfile__bio">Bio: {userProfile.bio}</div>
                <div className="userProfile__password">Password: {userProfile.password}</div>
                <div className="userProfile__profile_image_url">Picture: {userProfile.profile_image_url}</div>
                <div className="userProfile__created_on">Created On: {userProfile.created_on}</div>
                <div className="userProfile__active">Status: {userProfile.active}</div>           
            </section>
        </>
    )
}    