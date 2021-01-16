import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import s from './Dialogs.module.css';
import Messages from "./Messages/Messages";

const Dialogs = (props) =>{
    let contacts = props.state.contactData.map(c => <li><NavLink to={"/dialogs/" + c.id}>{c.name}</NavLink></li>);
    return(
        <div className={s.dialogs_page}>
             <div className={s.dialogs_names}>
                 <ul>
                    {contacts}  {/* тут высвечиваются контакты, принятые из contactData*/}
                 </ul>
             </div>
             <Route path="/dialogs/1" render={() => <Messages  dispatch={props.dispatch} state={props.state}/>}/>
        </div>
    )
}
export default Dialogs;