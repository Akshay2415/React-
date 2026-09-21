import React, { useState } from 'react'

const App = () => {

  const[num , setNum] = useState(0);
  const[obj, setObj] = useState({user : "Akshay",age: 20})
  const[arr , setArr] = useState([10,20,30]);
/* 
In useState function num is variable where the value 
get stored and setNum is a function that is use to change the value

num -> read only value
setNum -> write only value

--->IMPORTANT POINTS<---
* setNum -> ** it is an ASYNCHRONUS function **

* if u use same value in setNum function like
          setNum(num)
  so react does re-render because it check that if the value is same or not 
  if it is then react dont put any efforts to do the same task 
*/

/* 
Advance state Management
*/
const object = ()=>{
  const newObj = {...obj}
  newObj.user = "Rohit"
  setObj(newObj)
}

//another way to write function (arrow function)
  const array = () =>{
    const newArr = [...arr] //pick reference of arr store anywhere in memory and store that ref in newArr
    newArr.push(50); //done the process
    setArr(newArr); //call the newArr in setArr() to get the updated arr
  } 
  //here we use deconstructor way to push a value in array 
  //a concept of javascript


  function increase(){
    setNum(num+1)
  }
   function decrease(){
    setNum(num-1)
  }
   function jumpby5(){
    setNum(num+5)
  }


  return (
    <div className='counter'>
      <h1>{num}</h1>
      
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jumpby5}>Increase by 5</button>
    </div>
  )
}

export default App
