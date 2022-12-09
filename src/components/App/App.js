import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewTaskForm from '../NewTaskForm'
import TaskList from '../TaskList'
import Footer from '../Footer'

function App() {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     filter: 'all',
  //     dateNow: new Date(),
  //     arrTodo: [
  //       {
  //         label: 'Drink Beer',
  //         completed: true,
  //         publicDate: new Date(2016, 0, 1),
  //         id: uuidv4(),
  //         timer: 360,
  //       },
  //       {
  //         label: 'Repair car',
  //         completed: false,
  //         publicDate: new Date(2022, 0, 1),
  //         id: uuidv4(),
  //         timer: 50,
  //       },
  //       {
  //         label: 'Read book',
  //         completed: false,
  //         publicDate: new Date(2021, 0, 4),
  //         id: uuidv4(),
  //         timer: 1000,
  //       },
  //     ],
  //   }
  // }

  const [filter, setFilter] = useState('all')
  const [dateNow] = useState(new Date())
  const [arrTodo, setArrTodo] = useState([
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
  ])

  // componentWillUnmount() {
  //   clearInterval(this.intervalId)
  // }

  const subTime = (id) => {
    // this.setState(({ arrTodo }) => {
    const idx = arrTodo.findIndex((el) => el.id === id)
    const oldItem = arrTodo[idx]
    const newValueTimer = oldItem.timer - 1
    const newItem = { ...oldItem, timer: newValueTimer }
    const before = arrTodo.slice(0, idx)
    const after = arrTodo.slice(idx + 1)
    // const newArray = [...before, newItem, ...after]
    setArrTodo([...before, newItem, ...after])
    // return {
    //   arrTodo: newArray,
    // }
    // })
  }

  const deleteTask = (id) => {
    // this.setState(({ arrTodo }) => {
    const idx = arrTodo.findIndex((el) => el.id === id)
    const before = arrTodo.slice(0, idx)
    const after = arrTodo.slice(idx + 1)
    // const newArray = [...before, ...after]
    setArrTodo([...before, ...after])

    // return {
    //   arrTodo: newArray,
    // }
    // })
  }

  // eslint-disable-next-line class-methods-use-this
  const createTask = (label, timer) => ({
    label,
    completed: false,
    publicDate: new Date(),
    id: uuidv4(),
    timer,
  })

  const addTask = (text, timer) => {
    const newTask = createTask(text, timer)

    setArrTodo([...arrTodo, newTask])
    // this.setState(({ arrTodo }) => ({
    //   arrTodo: [...arrTodo, newTask],
    // }))
  }

  const deleteCompletedTask = () => {
    // this.setState(({ arrTodo }) => ({
    //   arrTodo: arrTodo.filter((el) => !el.completed),
    // }))
    setArrTodo(arrTodo.filter((el) => !el.completed))
  }

  // редактируем булево поле в конкретной таске
  const editTaskBool = (id, name) => {
    // this.setState(({ arrTodo }) => {
    const idx = arrTodo.findIndex((el) => el.id === id)
    const oldItem = arrTodo[idx]
    const newItem = { ...oldItem, [name]: !oldItem[name] }
    const before = arrTodo.slice(0, idx)
    const after = arrTodo.slice(idx + 1)
    // const newArray = [...before, newItem, ...after]
    setArrTodo([...before, newItem, ...after])
    // return {
    //   arrTodo: newArray,
    // }
    // })
  }

  const completeTask = (id) => {
    editTaskBool(id, 'completed')
  }

  const editLabelTask = (id, text) => {
    // this.setState(({ arrTodo }) => {
    const idx = arrTodo.findIndex((el) => el.id === id)
    const oldItem = arrTodo[idx]
    const newItem = { ...oldItem, label: text }
    const before = arrTodo.slice(0, idx)
    const after = arrTodo.slice(idx + 1)
    // const newArray = [...before, newItem, ...after]
    setArrTodo([...before, newItem, ...after])
    // return {
    //   arrTodo: newArray,
    // }
    // })
  }

  const displayFiltered = (category) => {
    if (category === 'all') {
      return arrTodo
    }

    return arrTodo.filter((el) => el.completed.toString() === category)
  }

  const chooseFilter = (category) => {
    // this.setState({
    //   filter: category,
    // })
    setFilter(category)
  }

  const completedTaskCount = arrTodo.filter((el) => !el.completed).length

  return (
    <div className="todoapp">
      <h1>todos</h1>
      <NewTaskForm addTask={addTask} />
      <section className="main">
        <TaskList
          todos={displayFiltered(filter)}
          onDeleted={deleteTask}
          completeTask={completeTask}
          editLabelTask={editLabelTask}
          subTime={subTime}
          dateNow={dateNow}
          // onClickTimer={onClickTimer}
        />
        <Footer
          completed={completedTaskCount}
          chooseFilter={chooseFilter}
          filter={filter}
          deleteCompletedTask={deleteCompletedTask}
        />
      </section>
    </div>
  )
}

export default App
