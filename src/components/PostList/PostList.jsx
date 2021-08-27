import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({title, posts, deletePost}) => {
    if (!posts.length){
        return <div>
            <h1 style={{textAlign: 'center'}}>Posts don't find!</h1>
        </div>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post) => <PostItem key={post.id} post={post} deletePost={deletePost}/>)}
        </div>
    );
};

export default PostList;