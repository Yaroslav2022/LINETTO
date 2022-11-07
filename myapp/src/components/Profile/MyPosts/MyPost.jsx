import React from 'react';
import pr from './MyPost.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (

        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post!</button>
            </div>
            <Post message='Hi, how are you?' likes="2220" />
            <Post message="It'c my first post!" likes="12" />
        </div>
    );
}

export default MyPosts;