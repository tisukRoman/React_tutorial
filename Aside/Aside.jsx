import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Aside.module.css';

const Aside = ()=>{
    return(
      <aside>
        <nav>
          <ul>
            <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
            <li><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></li>
            <li><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
            <li><NavLink to="/forecast" activeClassName={s.active}>DRINKS)</NavLink></li>
          </ul>  
        </nav>
      </aside>
    )
}
export default Aside;