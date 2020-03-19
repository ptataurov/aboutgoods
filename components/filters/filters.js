import React, { useState, useRef } from 'react'
import css from './filters.module.scss'
import validator from 'validator'

const brandsData = [
  { _id: 1, name: 'LG', isChecked: false },
  { _id: 2, name: 'Sony', isChecked: false },
  { _id: 3, name: 'Xiaomi', isChecked: false },
  { _id: 4, name: 'Samsung', isChecked: false },
  { _id: 5, name: 'Philips', isChecked: false },
  { _id: 6, name: 'BQ', isChecked: false },
  { _id: 7, name: 'Fusion', isChecked: false },
  { _id: 8, name: 'Hyundai', isChecked: false },
  { _id: 9, name: 'Haier', isChecked: false },
  { _id: 10, name: 'JVC', isChecked: false }
]

const priceData = { min: '4 250', max: '399 000' }

const Filters = ({ mixin }) => {
  const [price, setPrice] = useState({ from: '', to: '' })
  const [brands, setBrands] = useState(brandsData)
  const [brandSearchValue, setBrandSearchValue] = useState('')
  const [showAllBrands, toggleShowAllBrands] = useState(false)

  const inputBrandSearchRef = useRef()

  const styles = {
    brandSearchResetBtn: brandSearchValue ? '' : ' hidden'
  }

  let brandsList = showAllBrands ? brands : brands.slice(0, 5)

  const brandSearchHandler = value => {
    setBrandSearchValue(value)

    setBrands(
      brandsData.filter(({ name }) => name.toLowerCase().includes(value))
    )
  }

  const inputPriceHandler = ({ name, value }) => {
    if (validator.isInt(value)) {
      setPrice({ ...price, [name]: value })
    } else if (!value) {
      setPrice({ ...price, [name]: '' })
    }
  }

  return (
    <div className={css.filters + ' ' + mixin}>
      <div className={css.priceGroup}>
        <span className={css.label}>Средняя цена, ₽</span>
        {false && (
          <div className={css.range}>
            <button className={css.rangeBtnLeft}></button>
            <span className={css.progress}>
              <span className={css.fill}></span>
            </span>
            <button className={css.rangeBtnRight}></button>
          </div>
        )}

        <div className={css.inputGroup}>
          <div className={css.input}>
            <label htmlFor='from'>от</label>
            <input
              id='from'
              name='from'
              type='text'
              value={price.from}
              onChange={e => inputPriceHandler(e.target)}
              placeholder={priceData.min}
            />
          </div>
          <div className={css.input}>
            <label htmlFor='to'>до</label>
            <input
              id='to'
              name='to'
              type='text'
              value={price.to}
              onChange={e => inputPriceHandler(e.target)}
              placeholder={priceData.max}
            />
          </div>
        </div>
      </div>

      <div className={css.brandGroup}>
        <span className={css.label}>Бренды</span>
        {showAllBrands && (
          <div className={css.search}>
            <input
              className={css.input}
              value={brandSearchValue}
              onChange={({ target }) =>
                brandSearchHandler(target.value.toLowerCase())
              }
              ref={inputBrandSearchRef}
              type='text'
              placeholder='Поиск бренда'
            />
            <span
              className={css.resetBtn + styles.brandSearchResetBtn}
              onClick={() => {
                inputBrandSearchRef.current.focus()
                setBrandSearchValue('')
                setBrands(brandsData)
              }}>
              <span></span>
              <span></span>
            </span>
          </div>
        )}

        <div className={css.list}>
          {brandsList.map(brand => {
            const { _id, name, isChecked } = brand
            const styles = isChecked ? ' checked' : ''

            return (
              <div
                className={css.checkboxGroup + styles}
                key={_id}
                data-id={_id}
                data-value={name}
                onClick={() => {
                  const idx = brands.indexOf(brand)
                  const newBrands = [...brands]

                  newBrands[idx].isChecked = !newBrands[idx].isChecked

                  setBrands(newBrands)
                }}>
                <span className={css.checkbox}></span>
                <span className={css.checkboxLabel}>{name}</span>
              </div>
            )
          })}
        </div>
        {!showAllBrands && (
          <button
            className={css.showAllBrandsBtn}
            onClick={() => toggleShowAllBrands(!showAllBrands)}>
            Посмотреть все
          </button>
        )}
      </div>
    </div>
  )
}

export default Filters
