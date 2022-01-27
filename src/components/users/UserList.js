import React, { useEffect, useState } from "react"
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
                            <div className="username"> {user.username}</div>
                        </div>
                    }
                ).reverse()
            }
        </>
    )
}