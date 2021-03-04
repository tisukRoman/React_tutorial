import React from 'react';
import s from './Post.module.css';
import AOS from 'aos';
import "aos/dist/aos.css";

class Post extends React.Component {

    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    render() {
    
        return (
        <div>
            {this.props.postData.map(p => {
                return (<div data-aos="fade-right" className={s.post_wrapper}>
                    <div className={s.img}>
                        <img src={p.imgURL} alt='something went wrong'/>
                    </div>

                    <div className={s.media}>
                        <span>{p.userName}</span>
                        <div>{p.comment}</div>
                    </div>
                </div>)})}
        </div>)
    }

            
            
    

}



export default Post;