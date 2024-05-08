import React from 'react'
import './Product.css'

const Product = ({
  img,
  title,
  subtitle,
  text,
}) => {
  return (
    <div className='product'>
      <img src={img} alt="Product" className='product-image' />
      <h3 className='product-title'>{title}</h3>
      <h4 className='product-subtitle'>{subtitle}</h4>
      <p className="product-text">{text}</p>
      <a className='product-learn'>Learn more</a>
    </div>
  )
}

export default Product