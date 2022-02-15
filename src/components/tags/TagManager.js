export const getTags = (tagId) => {
    return fetch(`http://localhost:8000/tags/${tagId}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('lu_token')}`
        }
    }).then(res => res.json())
  }