import React from 'react'
import css from './products.module.scss'
import ProductsTable from '../products-table/products-table'

const Products = ({ mixin }) => {
  return (
    <div className={css.products + ' ' + mixin}>
      <ProductsTable mixin={css.productsTable} />
    </div>
  )
}

export default Products
