import React from 'react'

function Button({className = "" , type = "button"  ,children , ...props}) {
  return (
    <button className={className} type={type} {...props}>
        {children}
    </button>
  )
}

export default Button
