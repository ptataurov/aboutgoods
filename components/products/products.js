import React, { useState } from 'react'
import css from './products.module.scss'
import ProductsTable from '../products-table/products-table'

import ProductCard from '../product-card/product-card'

const product = {
  brandName: 'Sony',
  brandLogo: '/img/sony-logo.png',
  name: 'Телевизор KD-55XF9005 54.6" (2018)',
  price: '57 795 ₽',
  rating: '4.72',
  reviews: 20,
  img:
    'https://avatars.mds.yandex.net/get-mpic/364668/img_id62240158504045648.jpeg/orig'
}

const Products = ({ mixin }) => {
  const [displayTable, setDisplayTable] = useState(true)

  return (
    <div className={css.products + ' ' + mixin}>
      <header className={css.header}>
        <div className={css.swither}>
          <button
            className={displayTable ? 'active' : ''}
            onClick={() => setDisplayTable(true)}>
            <svg
              width='34'
              height='34'
              viewBox='0 0 34 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect x='13' y='23' width='17' height='7' rx='1' fill='#EAEAEA' />
              <rect x='4' y='23' width='7' height='7' rx='1' fill='#EAEAEA' />
              <rect
                x='13'
                y='13.5'
                width='17'
                height='7'
                rx='1'
                fill='#EAEAEA'
              />
              <rect x='4' y='13.5' width='7' height='7' rx='1' fill='#EAEAEA' />
              <rect x='13' y='4' width='17' height='7' rx='1' fill='#EAEAEA' />
              <rect x='4' y='4' width='7' height='7' rx='1' fill='#EAEAEA' />
            </svg>
          </button>
          <button
            className={!displayTable ? 'active' : ''}
            onClick={() => setDisplayTable(false)}>
            <svg
              width='34'
              height='34'
              viewBox='0 0 34 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                x='18'
                y='18'
                width='12'
                height='12'
                rx='1'
                fill='#EAEAEA'
              />
              <rect x='4' y='18' width='12' height='12' rx='1' fill='#EAEAEA' />
              <rect x='18' y='4' width='12' height='12' rx='1' fill='#EAEAEA' />
              <rect x='4' y='4' width='12' height='12' rx='1' fill='#EAEAEA' />
            </svg>
          </button>
        </div>
      </header>

      {displayTable ? (
        <ProductsTable mixin={css.productsTable} />
      ) : (
        <div className={css.list}>
          {new Array(10).fill('').map((_, idx) => (
            <ProductCard {...product} key={idx} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
