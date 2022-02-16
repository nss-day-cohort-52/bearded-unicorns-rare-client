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