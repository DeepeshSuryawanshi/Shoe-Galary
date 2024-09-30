import React from 'react'

const Button = ({lable,iconUrl,backgroundColor,textColor,borderColor,fullwidth}) => {
  
  return (
    <button className={`flex items-center justify-center gap-2 px-7 py-4 font-montserrat text-l 
    ${
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} border-2`: `text-white bg-coral-red border-coral-red ${fullwidth && 'w-full'} ` 
    } 
    rounded-full
    leading-none`}>
        {lable}
        {iconUrl == undefined ? '':
        <img src={iconUrl} alt={{lable}+'Icon'}
        className='ml-2 rounded-full w-5 h-5'
        />}
    </button>
  )
}

export default Button
