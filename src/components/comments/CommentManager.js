export const getComments = () => {
    return fetch(`http://localhost:8000/comments`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('lu_token')}`
        }
    }).then(res => res.json())
  }

  export const getCommentById = (id) => {
    return fetch(`http://localhost:8000/comments/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const createComment = (comment) => {
    return fetch("http://localhost:8000/comments", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    }).then(res => res.json()) 
}

export const deleteComment = (comment, id) => {
    return fetch(`http://localhost:8000/comments/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
    .then(getComments)
}

export const updateComment = (comment, id) => {
    return fetch(`http://localhost:8000/comments/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
}