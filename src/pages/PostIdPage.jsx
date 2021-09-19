import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {PostsAPI} from "../API/postsService";
import {useFetching} from "../hooks/useFetching";
import MyLoader from "../components/UI/MyLoader/MyLoader";


const PostIdPage = () => {
    const params = useParams();
    const id = params.id;
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    console.log(comments)
    const [getPostById, isPostLoading, isError] = useFetching(async () => {
        const response = await PostsAPI.getPostById(id);
        setPost(response);
    });

    const [getPostComments, isPostComLoading, isComError] = useFetching(async () => {
        const response = await PostsAPI.getPostComments(id);
        setComments(response);
    });

    useEffect(() => {
        getPostById();
        getPostComments();
    }, [id]);

    return <div>
        {
            isPostLoading ? <div style={{display: 'flex', justifyContent: 'center'}}><MyLoader/></div>
                : <>
                    <div>
                        <h1>Welcome, my die friend! It`s post by id {id}</h1>
                        <h3>{post[0].title}</h3>
                        <div>{post[0].body}</div>
                    </div>
                </>
        }
        <div>
            <h2>Комментарии:</h2>
            {
                isPostComLoading
                    ? <div style={{display: 'flex', justifyContent: 'center'}}><MyLoader/></div>
                    : <>
                        {
                            comments.map((comment) => <div style={{marginTop: 15}} key={comment.id}>
                                    <h5>{comment.email}</h5>
                                    <div>{comment.name}</div>
                                    <div>{comment.body}</div>
                                </div>
                            )
                        }
                    </>
            }
        </div>
    </div>
};

export default PostIdPage;

