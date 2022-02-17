import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { updateCategory, getCategoryById, getCategories } from './CategoryManager.js'

export const UpdateCategory = () => {
    const history = useHistory()
    const {categoryId} = useParams()
    const [categories, setCategories] = useState([])

    const [currentCategory, setCurrentCategory] = useState({
        label: "",
    })

    useEffect(() => {
        getCategoryById(categoryId).then(categoryData => setCurrentCategory({
            label: categoryData.label,
            }))
            .then(getCategories().then(data => setCategories(data)))
    }, [categoryId])

    const changeUpdatedCategory = (domEvent) => {
        domEvent.preventDefault()
        const copy = { ...currentCategory }
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentCategory(copy)
    }

    return (
        <form className="updateForm">
            <h2 className="updateForm__category">Edit the Category</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Category Name: </label>
                    <input type="text" name="label" required autoFocus className="form-control"
                        value={currentCategory.label}
                        onChange={changeUpdatedCategory}
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
                    updateCategory(category, categoryId)
                        .then(() => history.push("/categories"))
                }}
                className="btn btn-primary">Save</button>
            <button onClick={() => history.push("/categories")}>Cancel</button>
        </form>
    )
}
