import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getPostById, getPosts } from "./FeedManager"
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

    const deletePost = (id) => {
        fetch(`http://localhost:8088/posts/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            fetch("http://localhost:8088/posts")
            .then(res => res.json())
            .then((data) => {
                setPosts(data)
            })
            .then(() => {
                history.push("/posts")
            }) 
        })
    }

    return (
        <>
            <PostSearch onSearchTermChange={onSearchTermChange} searchTerm={searchTerm} />
            <div style={{ marginTop: "2rem"}}>
                <button onClick={() => history.push("/posts/create")}>
                    Create a Post
                </button>
                <div className="posts">
                    {
                        posts.map(post => 
                            <>
                            <Post key={post.id} post={post} />
                    <button onClick={() => deletePost(post.id)}>Delete Post</button>
                        </>
                            )
                    }
                </div>
            </div>
        </>
    )
}
