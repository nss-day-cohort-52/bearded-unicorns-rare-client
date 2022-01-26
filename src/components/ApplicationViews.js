import React from "react"
import { Route } from "react-router-dom"
import { Feed } from "./feed/feed"

export const ApplicationViews = () => {
  return (
    <>
    <h1 >Welcome to Rare Publishing</h1>
    <Route path ="/feed/Feed">
      <Feed />
    </Route>
    </>
  )
}
