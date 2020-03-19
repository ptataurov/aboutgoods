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

  const sideNavLinkHandler = link => {
    const { current: categoryMenu } = categoryMenuRef

    const name = link.dataset.name
    const links = categoryMenu.querySelectorAll('._link')
    const contents = categoryMenu.querySelectorAll('._category')
    const targetContent = categoryMenu.querySelector(
      `._category[data-name='${name}']`
    )

    Array.prototype.filter
      .call(links, el => el !== link)
      .forEach(el => {
        el.classList.remove('active')
      })

    link.classList.add('active')

    Array.prototype.filter
      .call(contents, el => el !== targetContent)
      .forEach(el => {
        el.classList.add('hidden')
      })

    targetContent.classList.remove('hidden')
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
              const styles = idx === 0 ? '_link active' : '_link'

              return (
                <Link href={`/category/${idx}`} key={idx}>
                  <a
                    className={css.link + ' ' + styles}
                    onMouseEnter={({ target }) => sideNavLinkHandler(target)}
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
            const styles = idx === 0 ? '_category' : '_category hidden'

            return (
              <div
                className={css.category + ' ' + styles}
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
