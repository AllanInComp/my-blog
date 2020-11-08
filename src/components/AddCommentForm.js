import React, {useState} from 'react';

import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live';

const AddCommentForm = ({articleName, setArticleInfo}) =>{
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async() => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`,{
            method: 'post',
            body: JSON.stringify({username, text: commentText}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setArticleInfo(body);
    }

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <label>
                Comment:
                <button>Add Comment</button>
            </label>
            <textarea rows="4" cols = "50" value={commentText} onChange={(e)=>setCommentText(e.target.value)}/>
            <button onClick={()=>addComment()}>Add Comment</button>
        </div>
    );
}



export default AddCommentForm;