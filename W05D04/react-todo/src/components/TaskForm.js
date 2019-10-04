import React from 'react'

const TaskForm = ({ handleChange, handleSubmit, newTask }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Task" 
        onChange={handleChange}
        value={newTask}
      />
      <button>Add</button>
    </form>
  )
}

export default TaskForm
