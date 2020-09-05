import React from 'react';
import store from './Redux/store'
import { Provider } from 'react-redux'
import CakeContainer from './Components/CakeContainer'
import HooksCakeContainer from './Components/HooksCakeContainer'
import IceCreamContainer from './Components/IceCreamContainer'
import NewCake from './Components/NewCake'
import ItemContainer from './Components/ItemContainer'
import UserContainer from './Components/UserContainer'

const App = () => {
  return (
    <Provider store={store} >
      <div>
        {/* <ItemContainer cake />
        <ItemContainer  />
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <NewCake/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
};

export default App;