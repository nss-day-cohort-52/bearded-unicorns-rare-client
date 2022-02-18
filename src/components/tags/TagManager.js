export const getTags = () => {
    return fetch(`http://localhost:8000/tags`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('lu_token')}`
        }
    }).then(res => res.json())
  }

export const getTagById = (id) => {
    return fetch(`http://localhost:8000/tags/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const createTag = (tag) => {
    return fetch("http://localhost:8000/tags", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    }).then(res => res.json()) 
}

export const deleteTag = (tag, id) => {
    return fetch(`http://localhost:8000/tags/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
    .then(getTags)
}

export const updateTag = (tag, id) => {
    return fetch(`http://localhost:8000/tags/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })

}