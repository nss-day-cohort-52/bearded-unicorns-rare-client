import React, { useState, useEffect } from "react"

export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8088/categories")
            .then(res => res.json())
    }
    useEffect(() => {
        getCategories()
        .then(data => setCategories(data))
    }, [])

    return (
        <div style={{ margin: "0rem 3rem" }}>
            <h1>Categories</h1>

            <div className="categories">
                {
                    categories.map(category => {
                        return <article key={`category--${category.id}`} className="card category" style={{ width: `18rem` }}>
                            <section className="card-body">

                                <div className="card"
                                    to={{
                                        pathname: `/categories/${category.id}`,
                                        state: { chosenCategory: category }
                                    }}>
                                    <h2 className="card-title">{category.label}</h2>
                                </div>

                            </section>
        
                        </article>
                    })
                }
            </div>
        </div>
    )
}