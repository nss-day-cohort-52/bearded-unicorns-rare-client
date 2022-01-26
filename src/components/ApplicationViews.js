import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./post/PostList"

export const ApplicationViews = () => {
  return (
    <>
    <h1 >Welcome to Rare Publishing</h1>
    <Route exact path="/posts">
                <>
                    <main className="postContainer">
                        <h1>Posts</h1>

                        <PostList />
                    </main>
                </>
            </Route>
    </>
  )
}
