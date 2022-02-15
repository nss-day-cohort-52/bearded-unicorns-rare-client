export const getRareUsers = () => {
  return fetch("http://localhost:8000/rareusers", {
      headers:{
          "Authorization": `Token ${localStorage.getItem("lu_token")}`
      }
  })
      .then(response => response.json())
}