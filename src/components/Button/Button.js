import React from 'react'
import "./button.css"

function Button({data}) {
  return (
    <div className="button">
        <h4>{data}</h4>
    </div>
  )
}

export default Button