import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider';
import Login from './componenets/Login';
import Profile from './componenets/Profile';



function App() {


  return (
      <UserContextProvider>
        <h2>Login Now</h2>
          <Login />
          <Profile />
      </UserContextProvider>
  );
}

export default App
  