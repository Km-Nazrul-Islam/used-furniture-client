import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BestSellItem from './BestSellItem';
const BestSell = () => {
    const [bestSellItem, setBestSellItem] = useState([]);

    useEffect(() => {
        fetch('bestsell.json')
        .then(res => res.json())
        .then(data => setBestSellItem(data))
    }, [])

    return (
        <div className='my-20'>
            <div>
                <h2 className='text-3xl text-primary font-bold text-center mb-10'>Best Sell Of This Season</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    bestSellItem.map(sell => <BestSellItem 
                        key={sell.id} 
                        sell={sell}
                        ></BestSellItem>)
                }
            </div>
        </div>
    );
};

export default BestSell;