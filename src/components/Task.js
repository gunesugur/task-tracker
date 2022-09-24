import { RiDeleteBin6Line } from "react-icons/ri";
const Task = ({ item, onDelete }) => {
  return (
    <div className="task">
      <h3>
        <li className='item-lists'>
          < div className='content-div' >
            <h3 className='item-title'>{"Task: "}{item.text}</h3>
            <p className='item-paragraph'>{"Date: "}{item.day}</p>
          </ div>
          <div className='delete-icon-div'>
            <label className='delete-icon'><RiDeleteBin6Line onClick={() => onDelete(item.id)} /></label>
          </div>
        </li>
      </h3>
    </div>
  )
}

export default Task

  // < div className = 'content-div' >
  //           <h3 className='item-title'>{item.text}</h3>
  //           <p className='item-paragraph'>{item.day}</p>
  //         </ >
  // <div className='delete-icon-div'>
  //   <label className='delete-icon'><RiDeleteBin6Line /></label>
  // </div>