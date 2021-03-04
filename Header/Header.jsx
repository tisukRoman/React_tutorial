import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header>
            {props.isAuthorized?(<div className={s.login}>{props.login}</div>):(<NavLink className={s.link} to='/login'>LOGIN</NavLink>)}
        </header>
    )
} 
export default Header;