import React, { useEffect, useState } from "react"
import { getUserById, addImage} from "./UserManager"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"

export const UserProfile = () => {
    const [user, setUser] = useState({})
    const [image, setImage] = useState("")
    const { userId } = useParams()
    const history = useHistory()
    useEffect(
        () => {
            getUserById(userId).then(data => setUser(data))
        },
        []
    )

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }
    
    const createProfileImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            console.log("Base64 of file is", base64ImageString);
    
            // Update a component state variable to the value of base64ImageString  
    setImage(base64ImageString) 
        });
    }
    return (
        <>
            <section className="userId" key={userId}>
                <h3 className="user__userName">User Name: {user.user?.username}</h3>
                <input type="file" id="user_image" onChange={createProfileImageString} />
                <input type="hidden" name="user_id" value={user.id} />
                <button onClick={(evt) => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    const profileImage = {
                        profile_image_url: image
                    }
                    // Send POST request to your API
                    addImage(profileImage, userId)
                        .then(() => history.push(`/rareusers/${userId}`))
                }
                    // Upload the stringified image that is stored in state
                }>Upload</button>
                <div className="user__first_name">First Name: {user.user?.first_name}</div>
                <div className="user__last_name">Last Name: {user.user?.last_name}</div>
                <div className="user__email">Email: {user.user?.email}</div>
                <div className="user__bio">Bio: {user.bio}</div>
                <img src={user.profile_image_url} className="user___image_url" />
                <div className="user__created_on">Created On: {user.created_on}</div>
                <div className="user__active">Status: {user?.active?.toString()}</div>
            </section>
        </>
    )
}    