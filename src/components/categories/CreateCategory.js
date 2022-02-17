import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getCategories, addCategory } from './CategoryManager.js'


export const CategoryForm = () => {
    const history = useHistory()
    const [categories, setCategories] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentCategory, setCurrentCategory] = useState({
        label: "",
    })

    // useEffect(() => {
    //     getPostById().then(postId => setPosts(postId))
    // }, [])

    useEffect(() => {
        getCategories().then(cate => setCategories(cate))
    }, [])

    const changeCategoryState = (domEvent) => {
        domEvent.preventDefault()
        const copy = { ...currentCategory }
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentCategory(copy)
    }

    return (
        <form className="postForm">
            <h2 className="postForm__label">Make a new post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Name Your Category: </label>
                    <input type="text" name="label" required autoFocus className="form-control"
                        value={currentCategory.label}
                        onChange={changeCategoryState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const category = {
                        label: currentCategory.label,
                    }

                    // Send CATEGORY request to your API
                    addCategory(category)
                        .then(() => history.push("/categories"))
                }}
                className="btn btn-primary">Save</button>
        </form>
    )
}