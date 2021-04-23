import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image3 from '../images/img-3.jpg';
import image4 from '../images/img-4.jpg';
import image5 from '../images/img-5.jpg';
import image6 from '../images/img-6.jpg';
import image7 from '../images/img-7.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out whatever the hell I make these cards into</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={image5}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        label="Past Treks"
                        path='/'
                        />
                        <CardItem 
                        src={image4}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        label="Donate"
                        path='/donations'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={image3}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        label="Gear"
                        path='/gear'
                        />
                        <CardItem 
                        src={image6}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        label="Merch"
                        path='/merch'
                        />
                        <CardItem 
                        src={image7}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        label="Sign Up"
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
