import React from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Users from './components/Users';
const App = () => {
  return (
    <div className="container">
      <Header />
      <Users />
      <Body />
    </div>
  );
}


export default App;
