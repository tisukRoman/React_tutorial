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
            <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
            <li><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
          </ul>  
        </nav>
      </aside>
    )
}
export default Aside;