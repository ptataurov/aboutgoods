import React, { useRef } from 'react'
import css from './category-menu.module.scss'
import Link from 'next/link'

const links = [
  { label: 'Электроника' },
  { label: 'Бытовая техника' },
  { label: 'Компьютерная техника' },
  { label: 'Строительство и ремонт' },
  { label: 'Детские товары' },
  { label: 'Авто' },
  { label: 'Товары для дома' }
]

const category = [
  'Мобильные телефоны',
  'Смартфоны',
  'Кнопочные мобильные телефоны',
  'Умные часы и браслеты',
  'Аксессуары для телефонов'
]

const CategoryMenu = ({ show, mixin }) => {
  const categoryMenuRef = useRef()
  const sideNavRef = useRef()

  const { current: categoryMenu } = categoryMenuRef

  const mouseEnterHandler = link => {
    const name = link.dataset.name

    const activeNodes = categoryMenu.querySelectorAll(
      `.active:not([data-name='${name}'])`
    )

    if (!activeNodes.length) return

    const targetNodes = categoryMenu.querySelectorAll(`[data-name='${name}']`)

    activeNodes.forEach(el => el.classList.remove('active'))
    targetNodes.forEach(el => el.classList.add('active'))
  }

  const styles = {
    categoryMenu: show ? '' : ' hidden'
  }

  return (
    <div
      className={css.categoryMenu + styles.categoryMenu + ' ' + mixin}
      ref={categoryMenuRef}>
      <div className={css.categoryMenuContainer + ' container'}>
        <nav className={css.sideNav} ref={sideNavRef}>
          <div className={css.scrollWrap}>
            {links.map((link, idx) => {
              const styles = idx === 0 ? ' _link active' : ' _link'

              return (
                <Link href={`/category/${idx}`} key={idx}>
                  <a
                    className={css.link + styles}
                    onMouseEnter={({ target }) => mouseEnterHandler(target)}
                    data-name={link.label}>
                    {link.label}
                  </a>
                </Link>
              )
            })}
          </div>
        </nav>

        <div className={css.categoryContainer}>
          {links.map((link, idx) => {
            const styles = idx === 0 ? ' _category active' : ' _category'

            return (
              <div
                className={css.category + styles}
                data-name={link.label}
                key={idx}>
                <header className={css.header}>
                  <Link href={`/category/${idx}`} key={idx}>
                    <a className={css.title}>{link.label}</a>
                  </Link>
                </header>

                <div className={css.scrollWrap}>
                  <div className={css.subcategoresContainer}>
                    {[1, 2, 3, 4].map((_, idx) => {
                      return (
                        <div className={css.subcategory} key={idx}>
                          <Link href={`/category/${idx}`} key={idx}>
                            <a className={css.name}>Смартфоны и умные часы</a>
                          </Link>

                          <div className={css.subcategories}>
                            {category.map((link, idx) => {
                              return (
                                <Link href={`/category/${idx}`} key={idx}>
                                  <a className={css.subcategoryLink}>{link}</a>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoryMenu
