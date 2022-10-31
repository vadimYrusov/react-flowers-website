import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Flowers of extraordinary beauty</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    scr=""
                    text="flower"
                    label='Flowers'
                    path='/services'
                    />
                    <CardItem 
                    scr=""
                    text="flower"
                    label='Flowers'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    scr=""
                    text="flower"
                    label='Flowers'
                    path='/services'
                    />
                    <CardItem 
                    scr=""
                    text="flower"
                    label='Flowers'
                    path='/services'
                    />
                    <CardItem 
                    scr=""
                    text="flower"
                    label='Flowers'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards