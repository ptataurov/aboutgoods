import React, { useContext } from 'react'
import Head from 'next/head'

import css from './layout.module.scss'
import AppContext from '../../context/app/app-context'

import Header from '../header/header'

const Layout = ({
  title = 'AboutGoods – сервис аналитики товаров',
  children
}) => {
  const { overlayShow } = useContext(AppContext)

  const styles = {
    overlay: overlayShow ? 'overlay' : 'overlay hidden'
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header mixin={css.header} />
      <div className={styles.overlay}></div>

      <div className='container'>{children}</div>
    </>
  )
}

export default Layout
