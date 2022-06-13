import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';

function App() {
  return (
    <div className='page'>
        <Switch>
          <Route exact path='/' component={Main}></Route>
          <Route exact path='/movies' component={Movies}></Route>
        </Switch>
    </div>
  );
}

export default App;
