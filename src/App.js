import React from 'react';
// import Main from './Components/Main'
import Routes from './Routes'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      {/* <Main>
        <Routes />
      </Main> */}
      <Routes />
    </div>
  );
};

export default App;