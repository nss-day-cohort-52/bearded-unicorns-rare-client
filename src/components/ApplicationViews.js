import React from "react"
import { Route } from "react-router-dom"
import { PostDetails } from "./feed/PostDetails"
import { PostList } from "./feed/PostList"
import { UserList } from "./users/UserList"
import { UserProfile } from "./users/UserProfile"
import { CategoryList } from "./categories/CategoryList"
import { TagList } from "./tags/TagList"

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

      <Route exact path="/posts/:postUserId(\d+)">
        <UserPosts />
      </Route>

      <Route exact path="/posts">
        <h1>Posts</h1>
        <PostList />
      </Route>

      <Route path="/posts/:postId(\d+)">
        <PostDetails />
      </Route>

      <Route exact path="/categories">
        <CategoryList />
      </Route>
      <Route exact path="/tags">
        <TagList />
      </Route>
    </>
  )
}
