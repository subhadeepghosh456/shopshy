import React from 'react';

const CardGrid = ({image,title}) => {
    return (
        <div className='px-5' >
            <img src={image} alt='product' className='w-28 h-28 object-contain'/>
            <p className='uppercase text-sm text-center'>{title.slice(0,10)}...</p>
        </div>
    );
}

export default CardGrid;
