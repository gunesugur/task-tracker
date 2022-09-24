const Button = ({ backGroundColor, text, textColor, toggleShow}) => {
  return (
    <div className='btn-container'>
      <button className='on-off-btn' style={{ backgroundColor: backGroundColor, color: textColor }} onClick={toggleShow}>
        {text}
      </button>
    </div>
  )
}

export default Button