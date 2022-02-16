import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getPostById, getPosts, deletePost } from "./FeedManager"
import Post from "./Post"
import { PostSearch } from "./PostSearch"

export const PostList = () => {

    const [ posts, setPosts ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState('')
    const history = useHistory()

    // Initialization effect hook -> Go get post data
    useEffect(()=> {
        if (searchTerm.length > 1) {
            getPostById(searchTerm).then((postsData) => setPosts(postsData))
        } else {
            getPosts().then((postsData) => setPosts(postsData))
        }
    }, [searchTerm])

    const onSearchTermChange = (value) => {
        setSearchTerm(value)
    }

    // const deletePost = (id) => {
    //     fetch(`http://localhost:8000/posts/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(() => {
    //         fetch("http://localhost:8000/posts")
    //         .then(res => res.json())
    //         .then((data) => {
    //             setPosts(data)
    //         })
    //         .then(() => {
    //             history.push("/posts")
    //         }) 
    //     })
    // }

    return (
        <>
            <PostSearch onSearchTermChange={onSearchTermChange} searchTerm={searchTerm} />
            <div class="table-container" style={{ marginTop: "2rem"}}>
                <button className="button is-success" onClick={() => history.push("/posts/create")}>
                    Create a Post
                </button>
                <table class="table">
                    {
                        posts.map(post => 
                            <>
                            <Post key={post.id} post={post} />
                        </>
                            )
                    }
                </table>
                <button onClick={() => deletePost(post.id)}>Delete Post</button>
            </div>
        </>
    )
}
