import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider';
import Login from './componenets/Login';
import Profile from './componenets/Profile';



function App() {


  return (
    <UserContextProvider>
      <h2>
        <strong className='text-blue-500 text-center '>Login Now</strong>
      </h2>
      <Login />
      <div className='h-20 w-25 ml-90 rounded-4xl text-center text-blue-500 bg-green-300 p-3'>
      <Profile />

      </div>
    </UserContextProvider>
  );
}

export default App
  