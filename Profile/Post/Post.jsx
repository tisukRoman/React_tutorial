import React from 'react';
import s from './Post.module.css';

const Post = (props)=>{
    return(
        <div className={s.post_wrapper}>
            <div className={s.img}>
                <img src={props.imgURL} />
            </div>

            <div className={s.media}>
                <span>{props.userName}</span>
                <div>{props.comment}</div>
            </div>
           
        </div>
    )
}
export default Post;