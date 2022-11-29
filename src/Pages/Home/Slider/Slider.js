import React from 'react';
import slider1 from '../../../assets/images/slider/slider1.jpg';
import slider2 from '../../../assets/images/slider/slider2.jpg';
import slider3 from '../../../assets/images/slider/slider3.jpg';
import slider4 from '../../../assets/images/slider/slider4.jpg';
import slider5 from '../../../assets/images/slider/slider5.jpg';
import slider6 from '../../../assets/images/slider/slider6.jpg';
import SliderItem from './SliderItem';

const sliderData = [
    {
        image: slider1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: slider2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: slider3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: slider4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: slider5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: slider6,
        prev: 5,
        id: 6,
        next: 1
    }
]

const Slider = () => {
    return (
        <div className="carousel w-11/12 h-1/2 mx-auto my-10">

            {
                sliderData.map(slider => <SliderItem
                    key={slider.id}
                    slider={slider}
                ></SliderItem>)
            }

        </div>
    );
};

export default Slider;