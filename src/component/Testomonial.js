
import React, { useState } from 'react';
import Cards from './Cards';

import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai";


function Testimonials(props){
    let reviews=props.reviews;

    const[index, setIndex]= useState([0]);

    function leftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length-1);
        }else{
            setIndex(index-1);
        }
    }

    function rightHadler(){
        if(index + 1 >=reviews.length){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    function surpriseHandler() {
        let randomIndex =  Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }


    return(
        <div className='w-[100%] mx-auto flex flex-col justify-center items-center gap-5'>
            <Cards review={reviews[index]}/>

            <div className='flex mx-auto w-[50%] justify-between relative text-violet-700 font-bold'>
                <button>
                    <AiOutlineArrowLeft onClick={leftHandler}
                        className='text-2xl cursor-pointer hover:text-violet-500'
                    />
                </button>
                <button>
                    <AiOutlineArrowRight onClick={rightHadler}
                        className='text-2xl cursor-pointer hover:text-violet-500'
                    />
                </button>
            </div>

            <div className='mt-6'>
        <button
        onClick={surpriseHandler}
         className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
            Surprise Me
        </button>
      </div>
        </div>
    )
}
export default Testimonials