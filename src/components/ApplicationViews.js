import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./feed/PostList"
import { UserList } from "./users/UserList"

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
