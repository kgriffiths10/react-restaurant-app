import React from 'react';
import heroImage from '../assets/restauranfood.jpg'; 

function About() {
    return (
        <>
            <div className='about-section'>
                <h1>Welcome to Pinchocchio</h1>
                <p>We are a family owned Meditteranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className='reserve-btn'>Reserve a Table</button>
            </div>
        </>
    );
}

export default About;
