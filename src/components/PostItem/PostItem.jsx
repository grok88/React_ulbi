import React from 'react';
import MyButton from "../UI/MyButton/MyButton";

const PostItem = ({post, deletePost}) => {
    return (
        <div className='post'>
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => deletePost(post.id)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;