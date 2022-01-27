import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Users } from "./UserManager"

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                .then(res => res.json())
                .then((userArray) => {
                    setUsers(userArray)
                })
        },
        []
    )

    return (
        <>
            {
                users.map(
                    (user) => {
                        return <div key={`user--${user.id}`}>
                            <div className="username"><Link to={`/profile/${user.id}`}>{user.username}</Link></div>
                        </div>
                    }
                ).reverse()
            }
        </>
    )
}