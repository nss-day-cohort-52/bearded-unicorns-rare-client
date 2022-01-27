import React from "react"
import { Route } from "react-router-dom"
import { PostDetails } from "./feed/PostDetails"
import { PostList } from "./feed/PostList"
import { UserList } from "./users/UserList"
import { UserProfile } from "./users/UserProfile"

export const ApplicationViews = () => {
  return (
    <>
    
    <Route exact path="/">
    <h1 >Welcome to Rare Publishing</h1>
    </Route>

    <Route exact path="/users">
      <UserList />
    </Route>

    <Route path="/profile/:userProfileId(\d+)">
      <UserProfile />
    </Route>

    <Route exact path="/posts">
                <>
                    <main className="postContainer">
                        <h1>Posts</h1>

                        <PostList />
                    </main>
                    
                </>
    </Route>
    
    <Route path="/posts/:postId(\d+)">
      <PostDetails />
    </Route>
    </>
  )
}
