import React from 'react';

const foodItems = [
    {
        name: 'Greek salad',
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        image: null // images.greekSalad
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        image: null // images.bruchetta
    }, 
    {
        name: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image : null // images.lemonDessert
    }
]

const FoodCard = ({name, price, description, image}) => {
    return (
        <article className='food-card'>
            <img>{image}</img>
            <div className='article-header'>
                <div className='special-title'>{name}</div>
                <div className='special-price'>{price}</div>
            </div>
            <p>{description}</p>
            <a href='#'>Order a delivery</a>
        </article>
    );
}

function Specials() {
    return (
        <section className='specials'>
            <div className='specials-heading'>
                <h1>This weeks specials!</h1>
                <button className='menu-btn'>Online Menu</button>
            </div>

            <div className='specials-grid'>
                {foodItems.map((item, index) => (
                    <FoodCard
                        key={index}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        image={item.image}
                    />

                ))}
            </div>
        </section>
    );
}

export default Specials;
