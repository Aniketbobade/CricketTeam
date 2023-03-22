import React from 'react'

function Cards(props){
   let review =props.review;
   

    return (
        <div className='mx-auto text-white'>
        <img className='mx-auto rounded-full' src={review.image} alt="" />
        <p className='text-[20px] font-bold'><span>Name :-</span>{review.name}</p>
        <p className='text-[20px]'><span>Role :-</span>{review.job}</p>
        <p className='text-[20px]'>{review.text}</p>
        </div>
    )
}

export default Cards