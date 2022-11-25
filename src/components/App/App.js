import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewTaskForm from '../NewTaskForm'
import TaskList from '../TaskList'
import Footer from '../Footer'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all',
      arrTodo: [
        {
          label: 'Drink Beer',
          completed: true,
          publicDate: new Date(2016, 0, 1),
          id: uuidv4(),
          timer: 360,
        },
        {
          label: 'Repair car',
          completed: false,
          publicDate: new Date(2022, 0, 1),
          id: uuidv4(),
          timer: 50,
        },
        {
          label: 'Read book',
          completed: false,
          publicDate: new Date(2021, 0, 4),
          id: uuidv4(),
          timer: 1000,
        },
      ],
    }
    this.chooseFilter = this.chooseFilter.bind(this)
  }

  deleteTask = (id) => {
    this.setState(({ arrTodo }) => {
      const idx = arrTodo.findIndex((el) => el.id === id)
      const before = arrTodo.slice(0, idx)
      const after = arrTodo.slice(idx + 1)
      const newArray = [...before, ...after]

      return {
        arrTodo: newArray,
      }
    })
  }

  addTask = (text, timer) => {
    const newTask = this.createTask(text, timer)

    this.setState(({ arrTodo }) => ({
      arrTodo: [...arrTodo, newTask],
    }))
  }

  deleteCompletedTask = () => {
    this.setState(({ arrTodo }) => ({
      arrTodo: arrTodo.filter((el) => !el.completed),
    }))
  }

  completeTask = (id) => {
    this.setState(({ arrTodo }) => {
      const idx = arrTodo.findIndex((el) => el.id === id)
      const oldItem = arrTodo[idx]
      const newItem = { ...oldItem, completed: !oldItem.completed }
      const before = arrTodo.slice(0, idx)
      const after = arrTodo.slice(idx + 1)
      const newArray = [...before, newItem, ...after]

      return {
        arrTodo: newArray,
      }
    })
  }

  editLabelTask = (id, text) => {
    this.setState(({ arrTodo }) => {
      const idx = arrTodo.findIndex((el) => el.id === id)
      const oldItem = arrTodo[idx]
      const newItem = { ...oldItem, label: text }
      const before = arrTodo.slice(0, idx)
      const after = arrTodo.slice(idx + 1)
      const newArray = [...before, newItem, ...after]

      return {
        arrTodo: newArray,
      }
    })
  }

  // eslint-disable-next-line class-methods-use-this
  createTask(label, timer) {
    return {
      label,
      completed: false,
      publicDate: new Date(),
      id: uuidv4(),
      timer,
    }
  }

  displayFiltered(category) {
    const { arrTodo } = this.state
    if (category === 'all') {
      return arrTodo
    }

    return arrTodo.filter((el) => el.completed.toString() === category)
  }

  chooseFilter(category) {
    this.setState({
      filter: category,
    })
  }

  render() {
    const { filter, arrTodo } = this.state
    const completedTaskCount = arrTodo.filter((el) => !el.completed).length

    return (
      <div className="todoapp">
        <h1>todos</h1>
        <NewTaskForm addTask={this.addTask} />
        <section className="main">
          <TaskList
            todos={this.displayFiltered(filter)}
            onDeleted={this.deleteTask}
            completeTask={this.completeTask}
            editLabelTask={this.editLabelTask}
            subTime={this.subTime}
          />
          <Footer
            completed={completedTaskCount}
            chooseFilter={this.chooseFilter}
            filter={filter}
            deleteCompletedTask={this.deleteCompletedTask}
          />
        </section>
      </div>
    )
  }
}
