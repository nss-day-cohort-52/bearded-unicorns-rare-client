import React, { useState, useEffect } from "react"
import { getCategories } from "./CategoryManager";

export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    
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
                                    <h2 className="card-title">{category.label}</h2>
                                <button>Edit</button>
                                <button>Delete</button>
                            </section>
        
                        </article>
                    })
                }
            </div>
        </div>
    )
}