import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>BLOGS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='Randomtext'
                            path='/blogs'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='Randomtext'
                            path='/blogs'
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Randomtext'
                            path='/blogs'
                        />
                        <CardItem 
                            src='images/img-3.jpg'
                            text='Randomtext'
                            path='/blogs'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Cards;
