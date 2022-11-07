import React from 'react';
import MyPosts from './MyPosts/MyPost';
import pr from './Profile.module.css';


const Profile = () => {
    return (
        <div>
            <div className='photo_big' >
                <img className='photo_space' src='https://phonoteka.org/uploads/posts/2021-06/1624387767_18-phonoteka_org-p-kosmos-zvezdi-oboi-krasivo-20.jpg' />
            </div>
            <div>Ava + d</div>
            <MyPosts />
        </div>
    );
}

export default Profile;