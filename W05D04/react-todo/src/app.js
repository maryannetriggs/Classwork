import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import TaskForm from './components/TaskForm'
import Todo from './components/Todo'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: [
        { task: 'Make a todo app', completed: false }, 
        { task: 'My other task', completed: false }
      ],
      newTask: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  handleChange(e) {
    this.setState({ newTask: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.newTask) return
    
    const task = { task: this.state.newTask, completed: false }
    const todos = [...this.state.todos, task]
    this.setState({ todos, newTask: '' }) // or ({ todos: todos })
  }

  toggleCompleted(selectedTodo) {
    const todos = this.state.todos.map(todo => {
      if (selectedTodo === todo) return { ...todo, completed: !todo.completed } 
      return { ...todo }
    })
    this.setState({ todos })
  }

  remainingTodos() {
    return this.state.todos.filter(todo => !todo.completed)
  }

  render() {
    console.log('I have rerendered, the state is: ', this.state)
    return (
      <main>
        <h1>You have {this.remainingTodos().length} thing(s) to do!</h1>
        <ul>
          {this.state.todos.map((todo, i) => (
            <Todo 
              key={i} 
              {...todo}
              onClick={() => this.toggleCompleted(todo)}
            />
          ))}
        </ul>

        <TaskForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newTask={this.state.newTask}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
