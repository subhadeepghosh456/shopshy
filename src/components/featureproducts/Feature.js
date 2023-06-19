import React from 'react';


const Feature = ({image}) => {
    
    return (
        <div className=''>
            <img className=' h-56 object-center hover:scale-90' alt='feature' src={image} />
        </div>
    );
}

export default Feature;
