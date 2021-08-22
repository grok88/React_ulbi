import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({title, posts}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post) => <PostItem key={post.id} post={post}/>)}
        </div>
    );
};

export default PostList;