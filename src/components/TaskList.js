import Task from "./Task"
const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((item) => (
          <Task key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TaskList