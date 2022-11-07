import React from 'react';
import pr from './Post.module.css';


const Post = (props) => {

    return (
        <div className={ pr.item }>
            <img src='https://yt3.ggpht.com/ytc/AKedOLTwaU3nKdRn3-L4q-GRYKGYta1RjDiwdhYDVB79NQ=s900-c-k-c0x00ffffff-no-rj' />
            { props.message }
            <div>Likes: { props.likes }</div>
        </div>
    );
}

export default Post;