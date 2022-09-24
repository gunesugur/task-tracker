import Header from "./components/Header"
import TaskList from "./components/TaskList"
import CreateTask from "./components/CreateTask"
import { useState } from 'react'
import { initialState } from './components/store/InitialState'
import "./App.css"
const App = () => {
  const [tasks, setTasks] = useState(initialState)
  const [isTaskBarShowed, setIsTaskBarShowed] = useState(false)

  // Create a task
  const onCreate = (task) => {
    const id = Date.now();
    const newTask = { id, ...task }
    setTasks((prevState) => [...prevState, newTask])
  }
  // Delete a task
  const onDelete = (deletedItemID) => setTasks(tasks.filter((task) => task.id !== deletedItemID))

  // Toggle Done

  // Toggle Show and Tide
  const toggleShow = () => setIsTaskBarShowed(prevState => !prevState)
  return (
    <div className="app-container">
      <Header title={"Task Tracker"} isTaskBarShowed={isTaskBarShowed} toggleShow={toggleShow}/>
      {isTaskBarShowed && <CreateTask onCreate={onCreate}/>}
      <TaskList tasks={tasks} onDelete={onDelete} />
    </div>
  )
  }
  export default App