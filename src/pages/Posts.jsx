import React, {useEffect, useRef, useState} from 'react';
import '../styles/app.css';
import PostList from "../components/PostList/PostList";
import PostForm from "../components/PostForm/PostForm";
import PostFilter from "../components/PostFilter/PostFilter";
import MyModal from "../components/MyModal/MyModal";
import MyButton from "../components/UI/MyButton/MyButton";
import {useSearchSortedPost} from "../hooks/usePosts";
import {PostsAPI} from "../API/postsService";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import {useFetching} from "../hooks/useFetching";
import {getPages} from "../utils/pages";
import {Pagination} from "../components/Pagination/Pagination";


function Posts() {
    const [posts, setPosts] = useState([]);

    const  lastElement = useRef();
    const  observer = useRef();

    //pagination
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [pages, setPages] = useState(1);
    //check  loading
    const [filter, setFilter] = useState({sort: '', search: ''});
    //modal
    const [isOpen, setIsOpen] = useState(false);

    const [fetchPosts, isPostsLoading, isError] = useFetching(async () => {
        const response = await PostsAPI.getPosts(limit, pages);
        setPosts(response.data);
        setTotalPages(getPages(response.headers['x-total-count'], limit));
    });

    useEffect(()=>{
        if(isPostsLoading) return;
        if(observer.current) observer.current.disconnect();

         let callback = function(entries, observer) {
            if(entries[0].isIntersecting && pages < totalPages){
                console.log('isIntersecting')
                setPages(pages  + 1)
            }
            /* Content excerpted, show below */
        };

        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current);
    }, [isPostsLoading])

    useEffect(() => {
        fetchPosts();
    }, [pages]);

    // Отсортированные посты и отфильрованные по названию
    const searchSortedPost = useSearchSortedPost(posts, filter.sort, filter.search);


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setIsOpen(false);
    }

    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    }


    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setIsOpen(!isOpen)}>Добавить Post</MyButton>
            <MyModal isOpen={isOpen} setIsVisible={setIsOpen}>
                <PostForm createPost={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isError && <h1 style={{textAlign: 'center'}}>Some error - {isError}</h1>}
            <PostList title={'First List'} posts={searchSortedPost} deletePost={deletePost}/>

            <div ref={lastElement} style={{height:10, backgroundColor:'red'}}></div>

            {
                isPostsLoading && <div style={{display: 'flex', justifyContent: 'center'}}><MyLoader/></div>
            }
            <Pagination totalPages={totalPages} pages={pages} setPages={setPages}/>
        </div>
    );
}

export default Posts;
