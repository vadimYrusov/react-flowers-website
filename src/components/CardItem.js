import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(proops) {
  return (
    <>
        <li className="cards__item">
            <Link className="cards__item__link" to={proops.path}>
                <figure className="cards__item__pic-wrap" data-category={proops.label}>
                    <img src={proops.src} alt="Flowers Image" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{proops.text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem