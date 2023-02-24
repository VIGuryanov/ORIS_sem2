import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sendCommentForm.css';

const SendCommentForm = () => {

    const [nameVal, setNameVal] = useState("");
    const [emailVal, setEmailVal] = useState("");
    const [commentVal, setCommentVal] = useState("");

    return (
        <div className='commentForm'>
            <input className='smallInputField' name="SenderName" type={"text"} placeholder="Enter your name" onChange={(e) => {
                setNameVal(e.target.value);
            }}></input>
            <input className='smallInputField' name="Email" type={"email"} placeholder="Enter your email" onChange={(e) => {
                setEmailVal(e.target.value);
            }}></input>
            <textarea className='commentContentField' name="Content" placeholder='Leave a comment here!' onChange={(e) => {
                setCommentVal(e.target.value);
            }}></textarea>
            <Link to={"/"}>
                <button onClick={SendCommentToServer}>Send</button>
            </Link>
        </div>
    )

    function SendCommentToServer() {
        let formData = new FormData();
        formData.append('senderName', nameVal);
        formData.append('email', emailVal);
        formData.append('content', commentVal);
    
        fetch("https://localhost:7053/comment",
            {
                body: formData,
                method: "post"
            });
    }
}

export default SendCommentForm