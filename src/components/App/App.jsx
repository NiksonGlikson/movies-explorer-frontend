import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Profile from '../Profile/Profile.jsx';
import NotFound from '../NotFound/NotFound.jsx';


function App() {
  return (
    <div className='page'>
        <Switch>
          <Route exact path='/' component={Main}></Route>
          <Route exact path='/movies' component={Movies}></Route>
          <Route exact path='/profile' component={Profile}></Route>
          <Route path='/signin' component={Login}></Route>
          <Route path='/signup' component={Register} buttonText="Зарегистрироваться"></Route>
          <Route path='*' component={NotFound}></Route>
        </Switch>
    </div>
  );
}

export default App;
