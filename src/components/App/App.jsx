import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';

function App() {
  return (
    <div className='page'>
        <Header />
        <Switch>
          <Route exact path='/' component={Main}></Route>
        </Switch>
    </div>
  );
}

export default App;
