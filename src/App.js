import React from 'react'; 
import TodoList from './TodoList'



function App() {
  return (
    <>
    <TodoList />
    <input type='text' />
    <button> Send</button>
    <button>Like Message!</button>
    <div> 0 Total Likes to the message</div>
    </>
  )
}

export default App;
