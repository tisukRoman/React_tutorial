import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import s from './App.module.css';
import Aside from './Aside/Aside';
import ProfileContainer from './Profile/ProfileContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import HeaderContainer from './Header/HeaderContainer';
import {ForecastCont} from './Forecast/Forecast';
import Login from './Login/Login';

function App(props) {

  return (
    <BrowserRouter>
      <div className="app_wrapper">

        <HeaderContainer />
        <Aside />

        <div className={s.content}>
          <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/> 
          <Route path="/dialogs" render={() => <DialogsContainer/>} />
          <Route path="/users" render={() => <UsersContainer/>} />
          <Route path="/forecast" render={() => <ForecastCont/>} />
          <Route path="/login" render={() => <Login/>} />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;
