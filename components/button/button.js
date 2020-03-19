import React from 'react'
import css from './button.module.scss'

const Button = ({ label }) => {
  return <button className={css.button}>{label}</button>
}

export default Button
