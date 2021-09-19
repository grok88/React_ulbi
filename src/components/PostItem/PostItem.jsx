import React from 'react';
import MyButton from "../UI/MyButton/MyButton";
import { useHistory } from "react-router-dom";


const PostItem = ({post, deletePost}) => {
    const history  = useHistory();

    return (
        <div className='post'>
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => history.push(`/posts/${post.id}`)}>Open</MyButton>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => deletePost(post.id)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;