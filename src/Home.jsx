import React from 'react';
import './home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
                <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title='Online Experiences'
                description='Unique activities we can do together, led by world of hosts'
                />
                <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title='Unique stays'
                description='Spaces that are more than just a place to sleep'
                 />
                <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title='Entire Homes'
                description='Comfortable private places, with room for firends or family'
                />
            </div>
            <div className='home__section'>
                <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title='3 Bedroom Flat In Mumbai'
                description='Superhost with a stunning view of the beachside'
                price='₹4000/Night'
                />
                <Card 
                src='https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg'
                title='Penthose in Pune'
                description='Enjoy the amazing sights of Pune with Stunning penthouses'
                price='₹3000/Night'
                />
                <Card
                src='https://media.nomadicmatt.com/2018/apartment.jpg'
                title='1 Bedroom Apartment'
                description='superhost with great amenities and fabolous shopping complex nearby'
                price='₹2000/Night'
                /> 
            </div>
        </div>
    )
}

export default Home;