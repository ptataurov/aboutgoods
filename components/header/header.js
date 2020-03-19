import React, { useState, useContext } from 'react'
import css from './header.module.scss'
import Link from 'next/link'
import Search from '../search/search'
import CategoryMenu from '../category-menu/category-menu'
import AppContext from '../../context/app/app-context'

const links = [
  { label: 'Электроника' },
  { label: 'Бытовая техника' },
  { label: 'Компьютерная техника' },
  { label: 'Строительство и ремонт' },
  { label: 'Детские товары' },
  { label: 'Авто' },
  { label: 'Товары для дома' }
]

const Header = ({ mixin }) => {
  const { toggleOverlay } = useContext(AppContext)

  const [categoryMenuShow, toggleCategoryMenuShow] = useState(false)

  const styles = {
    toggleCategoryMenuBtn: categoryMenuShow ? ' show' : ''
  }

  return (
    <header className={css.header + ' ' + mixin}>
      <div className={css.wrap + ' ' + 'container'}>
        <div className={css.top}>
          <Link href='/'>
            <img className={css.logo} src='/img/logo.svg' alt='Логотип' />
          </Link>

          <nav className={css.mainNav}>
            <span className={css.link}>
              <span className={css.label + ' ' + 'colorRed'}>
                Что такое AboutGoods?
              </span>
              <span className={css.popupMenu}>
                <span className={css.content}>
                  AboutGoods – сервис аналитики товаров в интернете...
                </span>
              </span>
            </span>
            <span className={css.link}>
              <span className={css.label}>Как считается рейтинг?</span>
              <span className={css.popupMenu}>
                <span className={css.content}>
                  Для расчета рейтинга используется <a href='#'>формула</a>,
                  которая препятствует его накрутке недобросовестными
                  пользователями.
                </span>
              </span>
            </span>
          </nav>

          <Search mixin={css.search} />
        </div>
        <div className={css.bottom}>
          <button
            className={css.toggleCategoryMenuBtn + styles.toggleCategoryMenuBtn}
            onClick={() => {
              toggleCategoryMenuShow(!categoryMenuShow)
              toggleOverlay()
            }}>
            <span className={css.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </span>
            Все категории
          </button>
          <nav className={css.categoryNav}>
            {links.map((link, idx) => {
              return (
                <Link href={`/category/${idx}`} key={idx}>
                  <a className={css.link}>{link.label}</a>
                </Link>
              )
            })}
          </nav>
        </div>

        <CategoryMenu show={categoryMenuShow} mixin={css.categoryMenu} />
      </div>
    </header>
  )
}

export default Header
