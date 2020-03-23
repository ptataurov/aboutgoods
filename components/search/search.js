import React, { useState, useRef } from 'react'
import css from './search.module.scss'

const Search = ({ mixin }) => {
  const [value, setValue] = useState('')

  const inputRef = useRef()

  const styles = {
    resetBtn: value ? '' : ' hidden'
  }

  return (
    <div className={css.search + ' ' + mixin}>
      <input
        className={css.input}
        onChange={e => setValue(e.target.value)}
        value={value}
        ref={inputRef}
        type='text'
        placeholder='Поиск'
      />
      <span
        className={css.resetBtn + styles.resetBtn}
        onClick={() => {
          inputRef.current.focus()
          setValue('')
        }}>
        <span></span>
        <span></span>
      </span>
      <button className={css.btn}>
        <img src='/img/search-icon.svg' alt='Иконка поиска' />
      </button>
    </div>
  )
}

export default Search
