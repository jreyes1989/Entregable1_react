import React from 'react'

const BtnQuote = ({objStykeBtn, handleClick}) => {
  return (
    <button style={objStykeBtn} onClick={handleClick} className="card__btn">&gt;</button>
  )
}

export default BtnQuote