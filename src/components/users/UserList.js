import React, { useEffect, useState } from "react"

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            console.log("Initial useEffect")
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
                            <div className="user_name"> {user.user_name}</div>
                        </div>
                    }
                ).reverse()
            }
        </>
    )
}