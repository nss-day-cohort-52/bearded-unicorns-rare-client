import React from "react"
import { Route } from "react-router-dom"
import { UserList } from "./users/UserList"

export const ApplicationViews = () => {
  return (
    <>
        <h1 >Welcome to Rare Publishing</h1>

        <Route exact path="/users">
          <UserList />
        </Route>
    </>
  )
}
