import React from 'react'
import Link from 'next/link'

import css from './product-card.module.scss'

const ProductCard = ({
  brandName,
  brandLogo,
  name,
  price,
  rating,
  img,
  reviews
}) => {
  return (
    <Link href='#'>
      <a className={css.productCard}>
        <div className={css.imgContainer}>
          <img className={css.img} src={img} alt={`Изображение ${name}`} />
        </div>
        <h6 className={css.name}>{name}</h6>
        <div className={css.brandGroup}>
          <div className={css.brandLogoContainer}>
            <img
              className={css.brandLogoImg}
              src={brandLogo}
              alt={`Логотип ${brandName}`}
            />
          </div>
          <span className={css.brandName}>{brandName}</span>
        </div>
        <div className={css.priceGroup}>
          <span className={css.priceLabel}>Средняя цена</span>
          <span className={css.price}>{price}</span>
        </div>

        <div className={css.ratingGroup}>
          <span className={css.rating}>{rating}</span>
          <span className={css.reviews}>{reviews} отзывов</span>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
