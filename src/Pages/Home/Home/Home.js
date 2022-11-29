import React from 'react';
import BestSell from '../BestSell/BestSell';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className=''>
            <Slider></Slider>
            <Categories></Categories>
            <BestSell></BestSell>
        </div>
    );
};

export default Home;