import React from 'react'
import './Product.css'
import { ReactSVG } from 'react-svg'

const Product = ({
  img,
  title,
  subtitle,
  text,
}) => {
  return (
    <div className='product'>
      <ReactSVG src={img} className='product-image' />
      <h3 className='product-title'>{title}</h3>
      <h4 className='product-subtitle'>{subtitle}</h4>
      <p className="product-text">{text}</p>
      <a className='product-learn'>Learn more</a>
    </div>
  )
}

export default Product