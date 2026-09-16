import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div id='right' className='h-full w-2/3 p-6 flex flex-nowrap gap-10 rounded-4xl overflow-x-auto'>
      {props.cards.map(function(elem){

        return <RightCard 
                id={elem.id}
                image ={elem.image}
                description ={elem.description}
                tag = {elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
