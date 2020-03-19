import React from 'react'
import css from './products-with-filters.module.scss'
import Products from '../products/products'
import Filters from '../filters/filters'

const ProductsWithFilters = () => {
  return (
    <div className={css.productsWithFilters}>
      <Products mixin={css.products} />
      <Filters mixin={css.filters} />
    </div>
  )
}

export default ProductsWithFilters
