export const getRareUsers = () => {
  return fetch("http://localhost:8000/rareusers", {
      headers:{
          "Authorization": `Token ${localStorage.getItem("lu_token")}`
      }
  })
      .then(response => response.json())
}
export const getUserById = (id) => {
  return fetch(`http://localhost:8000/rareusers/${id}`,{
  headers:{
      "Authorization": `Token ${localStorage.getItem("lu_token")}`
  }})
  .then(res => res.json())
}
export const deleteRareUser = (user, id) => {
  return fetch(`http://localhost:8000/rareusers/${id}`, {
      method: "DELETE",
      headers:{
          "Authorization": `Token ${localStorage.getItem("lu_token")}`,
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  })
      .then(getRareUsers)
}
export const addImage = (image, id) => {
  return fetch(`http://localhost:8000/rareusers/${id}`, {
      method: "PUT",
      headers: {
          "Authorization": `Token ${localStorage.getItem("lu_token")}`,
          "Content-Type": "application/json"
      },
      body: JSON.stringify(image)
  })
}