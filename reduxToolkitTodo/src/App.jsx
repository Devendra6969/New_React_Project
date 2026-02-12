import { useState } from 'react'
import AddTodo from './componenets/addTodo'
import Todos from './componenets/Todos'

function App() {


  return (
    <>
      <div className='h-screen bg-slate-700'>
        <div>
          <AddTodo />
        </div>
        <div>
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App
