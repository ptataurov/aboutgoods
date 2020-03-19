import React from 'react'
import Layout from '../../components/layout/layout'

import ProductsWithFilters from '../../components/products-with-filters/products-with-filters'

const Category = () => {
  return (
    <Layout title='Рейтинг телевизоров'>
      <h1 className='pageTitle'>Рейтинг телевизоров</h1>
      <h2 className='pageSubtitle'>Лучшие телевизоры на 2020 год</h2>

      <ProductsWithFilters />
    </Layout>
  )
}

export default Category
