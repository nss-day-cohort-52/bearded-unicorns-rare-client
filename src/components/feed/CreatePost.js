import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { addPost } from "./FeedManager";

export const CreatePost = () => {
    const [postdata, updatepostdata] = useState({user_id:localStorage.getItem()})

    



return( <form id="postform">
<label for="postform">Create New Post</label><br/>
<input type="text" id="image_url" name="image_link" placeholder="Paste your image URL here."
onChange={(e) => 
    { 
    const copy = [...postdata]
    copy.image_url = e.target.value
}
/>
<textarea type="textarea" id="userpost" name="post_text" placeholder="Write your post here."  

onChange= {
    (e) => {
    const copy = [...postdata]
    copy.content = e.target.value
    updatepostdata(copy)
    }
  }
  />
  <br/>
<button type="button" id="submitbutton"  name="submitbutton" form="submitpostbutton" 

onClick={
    ()=> addPost(postdata)
    }>

Submit
    </button>

</form>
)
}



// const SubmitPost = () => {}

// return (
//     <>
//     </>
// )
