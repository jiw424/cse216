import React from 'react'; 
import TodoList from './TodoList'



function App() {
  return (
    <>
    <TodoList />
    <input type='text' />
    <button> Like Todo</button>
    <button> Dislike Todo</button>
    <div> 0 Likes to the message</div>
    </>
  )
}

export default App;
