import React from 'react'
import './ButtonDemo.css'
const ButtonDemo =(props: any) => {
    const {variant = 'primary',label, children, ...rest} = props
  return (
    <button className={`button ${variant}`} {...rest}>{label}</button>
  )
}

export default ButtonDemo;