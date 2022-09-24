// import { useState } from "react"
// import PropTypes from "prop-types"
import "../App.css"
import Button from "./Button"
const Header = ({ title = "Task Tracker", isTaskBarShowed, toggleShow }) => {
  // const [button, setButton] = useState(true);
  return (
    <header className="header-container">
      <h1 className="title">{title}</h1>
      <Button
        backGroundColor={isTaskBarShowed ? "#a4133c" : "#00ffe6"}
        text={isTaskBarShowed ? "Close Add Text Bar" : "Show Add Text Bar"}
        textColor={isTaskBarShowed ? "#ff4d6d" : "#008276"}
        toggleShow={toggleShow}
      />
    </header>
  )
}
// Header.defaultProps = {
//   title: "Task Tracker(default )"
// }

// Header.propTypes = {
//   title: PropTypes.string
// }

export default Header