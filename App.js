import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import s from './App.module.css';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app_wrapper">

      <Header />
      <Aside />

      <div className={s.content}>
        <Route path="/profile" render={() => <Profile postData={props.state.postData}/>}/>
        <Route path="/dialogs" render={() => <Dialogs dispatch={props.dispatch} state={props.state}/>} />
      </div>

      </div>
    </BrowserRouter>
  )
}

export default App;
