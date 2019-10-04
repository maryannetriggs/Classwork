import React from 'react'

const Todo = ({ task, onClick, completed }) => (
  <li 
    onClick={onClick}
    className={completed ? 'completed' : ''}
  >
    {task}
  </li>
)

export default Todo