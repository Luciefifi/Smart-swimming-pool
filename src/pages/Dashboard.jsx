/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
import React from 'react'

import WaterParametersChart from '../components/Charts'
function Dashboard() {
  return (
     <div className=''>
         <div className='flex items-center justify-center m-10'>
            <span>choose the pool : </span>
            
            <select name="" id="" className='bg-blue-300 w-[20%] h-10'>
                <option value="">
                    Pool X
                </option>
                <option value="">
                    Pool Y
                </option>
                <option value="">
                    Pool Z
                </option>
            </select>
        
          
        </div>
     {/* <div className="h-screen bg-cover " style={{ backgroundImage: `url('/assets/pexels-pixabay-261411.jpg')` }}> */}
    <div className="flex flex-row gap-10   ml-20  m-4  p-2 w-[80%]">
       
      <div className=' border-2 border-black w-[25%] px-4 '>
        <h2 className='pt-2'>PH VALUE</h2>
        <div className="flex flex-row  justify-between">
          <p>8.9</p>
          <button className='bg-blue-500 rounded text-white px-1'>Not safe</button>
        </div>
      </div>
      <div className=' border-2 w-[25%] px-4 border-black  '>
        <h2 className='pt-2'>PH VALUE</h2>
        <div className="flex flex-row  justify-between">
          <p>8.9</p>
          <button className='bg-blue-500 rounded text-white  mb-1 px-1'>Not safe</button>
        </div>
      </div>
      <div className=' border-2 w-[25%] px-4  border-black '>
        <h2 className='pt-2'>PH VALUE</h2>
        <div className="flex flex-row  justify-between">
          <p>8.9</p>
          <button className='bg-blue-500 rounded text-white m-1 px-1'>Not safe</button>
        </div>
      </div>
    </div>
    <div className="  ml-20 mx-4 w-[75%] p-3">
  <div className="flex flex-row ">
    <div className="w-[70%]">
      <h3>Prediction</h3>
      <p className=''>
        This prediction is performed by the trained model to determine when
        the next maintenance or the next water cleaning for the swimming
        pool needs to be done. Click the button to refresh the prediction.
      </p>
    </div>
  </div>


</div>

<WaterParametersChart/>

  </div>
  )
}

export default Dashboard
