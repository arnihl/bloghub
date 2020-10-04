import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>BLOGS</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
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
                            src='images/img-1.jpg'
                            text='Randomtext'
                            path='/blogs'
                        />
                        <CardItem 
                            src='images/img-3.jpg'
                            text='Randomtext'
                            path='/blogs'
                        />
                    </ul>
                    <ul className='cards-items'>
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
