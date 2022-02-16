import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getRareUsers } from "./UserManager"

export const UserList = () => {
    const [ users, setUsers] = useState([])

    useEffect(
        () => {
            getRareUsers().then(data => setUsers(data))
        },
        []
    )

    return (
        <>
            {
                users.map(
                    (user) => {
                        return <div key={`user--${user.id}`}>
                            <div className="username">Username: <Link to={`/rareusers/${user.id}`}>{user.user.username}</Link></div>
                            <div className="first_name">First Name: {user.user.first_name}</div>
                            <div className="last_name">Last Name: {user.user.last_name}</div>
                            <div className="user_type">User Type: {user.active}</div>
                        </div>
                    }
                ).reverse()
            }
        </>
    )
}