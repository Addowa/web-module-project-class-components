import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  state = {
    showCompleted: true
  }

  toggleShowCompleted = evt => {
    this.setState({
      ...this.state,
      showCompleted: !this.state.showCompleted,
    })
  }

  render() {
    const { todos, toggleCompletion } = this.props
    const filtered = todos.filter(td => !td.completed || this.state.showCompleted)
    return (
      <div>
        {
          filtered.map((todo) => (<Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />))
        }
        <button onClick={this.toggleShowCompleted}>{this.state.showCompleted ? 'Hide Completed' : 'Show Completed'}</button>
      </div>
    )
  }
}
