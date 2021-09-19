import React from 'react';
import PostItem from "../PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({title, posts, deletePost}) => {
    if (!posts.length) {
        return <div>
            <h1 style={{textAlign: 'center'}}>Posts don't find!</h1>
        </div>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post) => <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem key={post.id} post={post} deletePost={deletePost}/>
                </CSSTransition>)
                }
            </TransitionGroup>
        </div>
    );
};

export default PostList;