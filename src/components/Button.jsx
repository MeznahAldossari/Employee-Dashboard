import React from 'react'

function Button({btnDetails}) {
  return (
    <div className='flex '>

        <div className='rounded-md max-sm:h-[1.9rem] max-sm:top-[1%] max-sm:left-[6%] max-sm:w-[5.8rem] lg:h-[2.01rem] h-[2.01rem] w-[8.9rem]  left-[0.2rem] lg:w-[8.9rem] lg:left-[0.2rem]  relative z-0 bg-secondary-gray '> 

        </div>
        <button className={`${btnDetails.btnColor} absolute z-40 lg:top-[3.1%] top-[-28%] px-9 py-[7px] max-sm:top-[-18%] lg:px-9 max-sm:px-3 max-sm:py-[5px] lg:py-[7px] text-[0.8em] rounded-md mr-2`}>
            {btnDetails.nameText}
        </button>
      
    </div>
    
       

    
    
  )
}

export default Button
