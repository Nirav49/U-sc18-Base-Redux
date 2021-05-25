import React from 'react';
import { useSelector } from 'react-redux'
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'


const App = () => {
  const authmanage = useSelector(state => state.auth.authanticated)
  return (
    <React.Fragment>
      <Header />
      {!authmanage && <Auth />}
      {authmanage && <UserProfile />}
      {authmanage && <Counter />}
    </React.Fragment>
  );
}

export default App;
