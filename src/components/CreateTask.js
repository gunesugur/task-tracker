import { useState } from "react"
const CreateTask = ({onCreate}) => {
  const [text, setText] = useState("");
  const [day, setDate] = useState("");

  const handleTextChange = (e) => setText(e.target.value)
  const handleDateChange = (e) => setDate(e.target.value)


  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    setDate("");
    onCreate({ text, day, isDone: false });
  }
  return (
    <div>
      <form className="create-task-form" onSubmit={onSubmit}>
        <label className="text-label" htmlFor="text">Next Task</label>
        <input
          type="text"
          value={text}
          name="text"
          placeholder="Please add your task..."
          id="text"
          required
          className="text-input"
          onChange={handleTextChange}
        />
        <br />
        <label className="date-label" htmlFor="date">Date</label>
        <input
          type="date"
          value={day}
          name="date"
          id="date"
          className="date-input"
          onChange={handleDateChange}
        />
        <br />
        <button className="form-submit-btn" type="submit">Save Task and Date</button>
      </form>
    </div>
  )
}

export default CreateTask