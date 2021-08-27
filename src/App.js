import React, {useMemo, useState} from 'react';
import './styles/app.css';
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'qw JS'},
        {id: 2, title: 'React', body: 'a React'},
        {id: 3, title: 'Css', body: 'zz Css'},
    ]);

    const [filter, setFilter] = useState({sort: '', search: ''});
    //modal
    const [isOpen, setIsOpen] = useState(false);

    const sortedPost = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } else return posts;
    }, [filter.sort, posts]);

    const searchSortedPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.search));
    }, [filter.search, sortedPost])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setIsOpen(false);
    }

    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    }

    return (
        <div className="App">
            <MyButton style={{marginTop:30}} onClick={() => setIsOpen(!isOpen)}>Добавить Post</MyButton>
            <MyModal isOpen={isOpen} setIsVisible={setIsOpen}>
                <PostForm createPost={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>

            <PostList title={'First List'} posts={searchSortedPost} deletePost={deletePost}/>
        </div>
    );
}

export default App;
