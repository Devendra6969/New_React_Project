import React from 'react'
import {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
      e.preventDefault();
      setUser({username, password})
    };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="border-2 w-100">
        <h2 className="bg-green-400 p-4 my-auto">Login</h2>
        <input
          className="p-2 border-2"
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          className="p-2 border-2"
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 p-4 rounded-2xl mx-10"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Login