import React from 'react';

const SliderItem = ({ slider }) => {
    const { image, id, prev, next } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full rounded-xl">
            <div className='slider-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-10 md:left-48 right-5 top-1/2 md:top-1/3">
                <div className='text-sm md:text-4xl font-bold text-white text-center'>
                    <p>The Biggest Used Furniture Seller</p>
                    <p>All Over Bangladesh</p>
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;