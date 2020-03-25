import React from 'react'
import css from './products-table.module.scss'

const product = {
  brandName: 'Sony',
  name: 'Телевизор KD-55XF9005 54.6" (2018)',
  price: '57 795 ₽',
  rating: '4.72',
  reviews: 1281,
  img:
    'https://avatars.mds.yandex.net/get-mpic/364668/img_id62240158504045648.jpeg/orig'
}

const ProductsTable = ({ mixin }) => {
  return (
    <div className={css.productsTableContainer + ' ' + mixin}>
      <table className={css.productsTable}>
        <thead>
          <tr>
            <th>Место</th>
            <th></th>
            <th className={css.productNameTh}>Название</th>
            <th>Бренд</th>
            <th>Средняя цена</th>
            <th>Отзывов</th>
            <th>Рейтинг</th>
          </tr>
        </thead>
        <tbody>
          {[1, '', -3, '', -2, 4, 1, '', 5, 1].map((changePosition, idx) => {
            const styles = {
              changePosition: changePosition < 0 ? ' colorRed' : ''
            }
            return (
              <tr key={idx}>
                <td>
                  <div className={css.positionGroup}>
                    <div className={css.positionWrap}>
                      <span className={css.position}>{idx + 1}</span>
                      <span
                        className={css.changePosition + styles.changePosition}>
                        {changePosition > 0
                          ? `+${changePosition}`
                          : changePosition}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={css.productImgContainer}>
                    <img
                      src={product.img}
                      alt={`Изображение ${product.name}`}
                    />
                  </div>
                </td>
                <td className={css.productNameTd}>
                  <div className={css.productNameContainer}>
                    <h3 className={css.productName}>{product.name}</h3>
                  </div>
                </td>
                <td>
                  <span className={css.brandName}>{product.brandName}</span>
                </td>
                <td className={css.priceTd}>
                  <span className={css.price}>{product.price}</span>
                </td>
                <td className={css.reviewsTd}>
                  <span className={css.reviews}>{product.reviews}</span>
                </td>
                <td>
                  <span className={css.rating}>{product.rating}</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
