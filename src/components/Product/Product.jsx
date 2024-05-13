import React from 'react'
import './Product.css'
import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom'

const Product = ({
  img,
  title,
  subtitle,
  text,
}) => {
  return (
    <div className='product'>
      <img src={img} className='product-image' />
      <h3 className='product-title'>{title}</h3>
      <h4 className='product-subtitle'>{subtitle}</h4>
      <p className="product-text">{text}</p>
      <Link to='/signup' className='product-learn'>Learn more</Link>
    </div>
  )
}

export default Product