import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getRareUsers } from "./UserManager"

export const RareUserList = () => {
    const [rareusers, setRareUsers] = useState([])

    useEffect(
        () => {
            getRareUsers().then(data => setRareUsers(data))
        },
        []
    )

    return (
        <>
            {
                rareusers.map(
                    (rareuser) => {
                        return <div key={`rareuser--${rareuser.id}`}>
                            <div className="username"><Link to={`/profile/${rareuser.id}`}>{rareuser.username}</Link></div>
                        </div>
                    }
                ).reverse()
            }
        </>
    )
}