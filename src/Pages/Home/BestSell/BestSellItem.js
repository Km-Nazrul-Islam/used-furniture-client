import React from 'react';

const BestSellItem = ({sell}) => {
    const {best_sell_name, best_sell_description, best_sell_img} = sell;
    return (
        <div className=''>
            <div className="card w-96 shadow-xl">
                <div className="card-body border-2 border-primary">
                    <h3 className='text-center text-xl font-bold text-primary'>{best_sell_name}</h3>
                    <p className='text-center'>{best_sell_description}</p>
                    <img className='rounded-xl' src={best_sell_img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default BestSellItem;