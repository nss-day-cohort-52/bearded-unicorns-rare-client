import React from "react"
import { Route } from "react-router-dom"
import { PostDetails } from "./feed/PostDetails"
import { PostList } from "./feed/PostList"
import { UserList } from "./users/UserList"
import { UserProfile } from "./users/UserProfile"
import { CategoryList } from "./categories/CategoryList"
import { CategoryForm } from "./categories/CreateCategory"
import { TagList } from "./tags/TagList"
import { PostForm } from "./feed/CreatePost"
import { UpdatePost } from "./feed/UpdatePost"
import { UserPosts } from "./users/UserPost"
import { TagForm } from "./tags/TagForm"
import { UpdateCategory } from "./categories/UpdateCategory"
import { EditTag } from "./tags/EditTag"
import { CommentForm } from "./comments/CommentForm"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <h1 >Welcome to Rare Publishing</h1>
      </Route>

      <Route exact path="/rareusers">
        <UserList />
      </Route>

      <Route exact path="/rareusers/:userId(\d+)">
        <UserProfile />
      </Route>

      <Route exact path="/posts/:postUserId(\d+)">
        <UserPosts />
      </Route>

      <Route exact path="/posts">
        <h1>Posts</h1>
        <PostList />
      </Route>

      <Route exact path="/posts/:postId(\d+)">
        <PostDetails />
      </Route>

      <Route exact path="/posts/create">
        <PostForm />
      </Route>

      <Route exact path="/posts/:postId(\d+)/update">
        <UpdatePost />
      </Route>

      <Route exact path="/posts/:postId(\d+)/comment">
        <CommentForm />
      </Route>

      <Route exact path="/categories">
        <CategoryList />
      </Route>
      
      <Route exact path="/categories/create">
        <CategoryForm />
      </Route>
      
      <Route exact path="/categories/:categoryId(\d+)/update">
        <UpdateCategory />
      </Route>

      <Route exact path="/tags">
        <TagList />
      </Route>

      <Route exact path="/tags/new">
        <TagForm />
      </Route>

      <Route exact path="/tags/:tagId(\d+)/edit">
        <EditTag />
      </Route>
    </>
  )
}
