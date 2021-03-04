import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';



const Dialogs = (props) =>{
debugger
    let contacts = props.contactData.map(c => <li><NavLink to={"/dialogs/" + c.id}>{c.name}</NavLink></li>);
    return(
        <div className={s.dialogs_page}>
             <div className={s.dialogs_names}>
                 <ul>
                    {contacts}  {/* тут высвечиваются контакты, принятые из contactData*/}
                 </ul>
             </div>
             <Route path="/dialogs/1" render={() => <MessagesContainer />}/>
        </div>
    )
}
export default Dialogs;