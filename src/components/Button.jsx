import React from 'react'

function Button({btnDetails}) {
  return (
    <div className='flex'>

        <div className='rounded-md lg:h-8 lg:w-[11.1vw] lg:left-[0.2rem]  relative z-0 bg-secondary-gray '> 

        </div>
        <button className={`${btnDetails.btnColor} absolute z-40 lg:top-[3.1%] lg:px-9 lg:py-[7px] text-[0.8em] rounded-md mr-2`}>
            {btnDetails.nameText}
        </button>
      
    </div>
    
       

    
    
  )
}

export default Button
