import React from 'react';
import s from './Users.module.css';
import ava from '../assets/img/ava.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div className={s.pageNav}>
            {pages.map(p => <span key={p} onClick={e => props.onPageChanged(p)} className={props.currentPage === p ? s.pageDigsSelected : s.pageDigs}>{p}</span>)}
        </div>

        {props.users.map(u => <div key={u.id} className={s.post_wrapper}>
            <NavLink to={'/profile/' + u.id}>
                <div className={s.img}>
                    <img src={u.photos.small != null ? u.photos.small : ava} alt='something went wrong'/>
                </div>
            </NavLink>

            <div className={s.media}>
                <div className={s.flex}>
                    <span>{u.name}</span>
                    <span>{'country'}</span>
                    <span>{'city'}</span>
                </div>
                <div className={s.status}>{u.status}</div>

                {(u.followed === false) ?
                    (<button onClick={() => { props.toFollow(u.id) }} className={s.buttonT}>Follow</button>) :
                    (<button onClick={() => { props.toUnfollow(u.id) }} className={s.buttonF}>Unfollow</button>)}

            </div>

        </div>)
        }
    </div>)
}


export default Users;