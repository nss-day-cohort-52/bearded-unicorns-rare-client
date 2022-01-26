import React from "react"
import { Route } from "react-router-dom"
import { UserList } from "./users/UserList"
import { Feed } from "./feed/Feed"

export const ApplicationViews = () => {
  return (
    <>
    
    <h1 >Welcome to Rare Publishing</h1>

    <Route path ="/feed/Feed">
      <Feed />
    </Route>

    <Route exact path="/users">
      <UserList />
    </Route>
    
    </>
  )
}
