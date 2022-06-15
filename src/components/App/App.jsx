import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';

function App() {
  return (
    <div className='page'>
        <Switch>
          <Route exact path='/' component={Main}></Route>
          <Route exact path='/movies' component={Movies}></Route>
          <Route path="/signin" component={Login}></Route>
          <Route path="/signup" component={Register} buttonText="Зарегистрироваться"></Route>
        </Switch>
    </div>
  );
}

export default App;
