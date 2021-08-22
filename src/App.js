import React, {useState} from 'react';
import './styles/app.css';
import PostList from "./components/PostList/PostList";
import MyButton from "./components/UI/MyButton/MyButton";
import MyInput from "./components/UI/MyInput/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'description JS'},
        {id: 2, title: 'React', body: 'description React'},
        {id: 3, title: 'Css', body: 'description Css'},
    ]);
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            id: posts.length + 1,
            title: post.title,
            body: post.body
        }
        setPosts([...posts, newPost]);
        setPost({title: '', body: ''})
    }

    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder={'add Title'} value={post.title}
                         onChange={(e) => setPost({...post, title: e.target.value})}/>
                <MyInput type="text" placeholder={'add Description'} value={post.body}
                         onChange={(e) => setPost({...post, body: e.target.value})}/>
                <MyButton onClick={addNewPost}> Добавить Post</MyButton>
            </form>
            <PostList title={'First List'} posts={posts}/>
        </div>
    );
}

export default App;
