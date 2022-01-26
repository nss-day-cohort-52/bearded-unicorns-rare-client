export const getPosts = () => {
    return fetch("http://127.0.0.1:8088/posts")
        .then(res => res.json())
}

export const getPostById = (id) => {
    return fetch(`http://127.0.0.1:8088/posts/${id}`)
        .then(res => res.json())
}

export const addPost = post => {
    return fetch("http://127.0.0.1:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(getPosts)
}

export const updatePost = post => {
    return fetch(`http://127.0.0.1:8088/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(getPosts)
}

export const releasePost = (postId) => {
    return fetch(`http://127.0.0.1:8088/posts/${postId}`, {
        method: "DELETE"
    })
        .then(getPosts)
}
