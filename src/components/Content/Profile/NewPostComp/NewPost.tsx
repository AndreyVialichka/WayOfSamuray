import React, { RefObject } from 'react'
import  classes from './NewPost.module.css'
type PropsType = {
    addPost: (value: string) => void
}
function NewPost(props:PropsType) {
    let newTextElem:RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        let text:string = newTextElem.current?.value || ''
        props.addPost(text)
      }

    return (
        <div>
            <textarea ref = {newTextElem}></textarea>
            <button onClick={addPost}>Add new Post</button>
        </div>
    );
  }
  
  export default NewPost;