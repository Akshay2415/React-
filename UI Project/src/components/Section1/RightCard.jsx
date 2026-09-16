import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 shrink-0 overflow-hidden relative rounded-4xl'>
     <img
        className="h-full w-full object-cover"
        src={props.image}
        alt="Man and woman working together"
        />
        <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
            <h1 className=' bg-white rounded-full font-semibold text-xl h-10 w-10 flex justify-center items-center '>{props.id}</h1>
            <div>
                <p className='text-lg leading-normal text-white mb-10'>{props.description}</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-400 text-white font-medium px-8 py-2 rounded-full ' >{props.tag}</button>
                    <button className='bg-blue-400 text-white px-3 py-2 rounded-full font-medium'> <i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard
