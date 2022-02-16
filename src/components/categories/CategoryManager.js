export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        method: "GET",
        headers: {
          "Authorization": `Token ${localStorage.getItem("lu_token")}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
    }
    .then(res => res.json())
    )}