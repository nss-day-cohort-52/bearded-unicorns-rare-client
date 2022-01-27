import React from "react"
import { Route } from "react-router-dom"
import { CreatePost } from "./feed/CreatePost"
import { PostList } from "./feed/PostList"

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
      <Route exact path="/feed/CreatePost">
        <CreatePost />
      </Route>
    
    </>
  )
}
