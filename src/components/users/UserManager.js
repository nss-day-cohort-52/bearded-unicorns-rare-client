export const Users = (User) => {
    return fetch("http://127.0.0.1:8088/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(User)
    }).then(res => res.json())
  }
  