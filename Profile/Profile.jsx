import React from 'react';
import Post from './Post/Post';
import s from './Profile.module.css';


const Profile = (props) =>{
  let posts = props.postData.map(p => (<Post userName={p.userName} comment={p.comment} imgURL={p.imgURL}/>));
    return(
      <main>
        <div className={s.wall}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%D0%A4%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BB%D0%B8%D0%B2._%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D1%84%D0%B0%D1%80%D0%B2%D0%B0%D1%82%D0%B5%D1%80.jpg/750px-%D0%A4%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BB%D0%B8%D0%B2._%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D1%84%D0%B0%D1%80%D0%B2%D0%B0%D1%82%D0%B5%D1%80.jpg" />
        </div>

        <div className={s.profile}>
          <img src="https://cs9.pikabu.ru/post_img/2017/03/05/12/1488745169193642012.jpg" />

          <div className={s.info}>
            <span>Roman Tyschuk</span>
            <div>18 y.o.</div>
            <div>Nyzhyn, Ukraine</div>
            <div>React developer</div>
          </div>
        </div>

        { posts } {/* тут высвечиваются посты, принятые из postData*/} 

      </main>
    )
}
export default Profile;