import React, {useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";

const PostForm = ({ createPost}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            id: Math.random(),
            title: post.title,
            body: post.body
        }
        createPost(newPost)

        setPost({title: '', body: ''})
    }
    return <form>
        <MyInput type="text" placeholder={'add Title'} value={post.title}
                 onChange={(e) => setPost({...post, title: e.target.value})}/>
        <MyInput type="text" placeholder={'add Description'} value={post.body}
                 onChange={(e) => setPost({...post, body: e.target.value})}/>
        <MyButton onClick={addNewPost}> Добавить Post</MyButton>
    </form>
};

export default PostForm;