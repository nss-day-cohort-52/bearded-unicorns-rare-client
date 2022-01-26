import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

export const CreatePost = () => {

const PostForm = () => {

return( <form id="postform">
<label for="fandlname">First and Last Name</label><br/>
<input type="text" id="fndlname" name="fandlname" value="Write your post here."  onChange={(e) => {
    const copy = {...founduser}
    copy.name = e.target.value
    setfounduser(copy)
  }}/><br/>
<label for="email">Email</label><br/>
<input type="text" id="email" name="email" value={founduser?.email} onChange={(e) => { 
   const copy = {...founduser}
   copy.email = e.target.value
   setfounduser(copy)}}/>
<button type="button" id="submitbutton"  name="submitbutton" form="edituserform" onClick={()=> editprofileinfocall()}>Submit</button>
    )
    
    
  </form>
)
}

return (
    <>
    <PostForm />
    </>
)
}