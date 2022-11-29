import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({category}) => {
    const {_id, name, title, img } = category; 
    console.log(category)
    return (
        <div className="card w-96 bg-base-200 shadow-xl">
            <img src={img} alt="" />
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p className='text-center'>{title}</p>
                <div className="card-actions justify-center">
                    <Link to={`/category/${_id}`}>
                        <button className="btn btn-primary w-full text-white font-semibold">Tap To View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;