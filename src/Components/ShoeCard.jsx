import React from 'react'

const ShoeCard = ({imageUrl,changeimage,BigShoeImg}) => {
    const handleclick = ()=>{
        if (BigShoeImg !== imageUrl.BigShoeImg) {
            changeimage(imageUrl.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${BigShoeImg === imageUrl.bigShoe? "border-coral-red":"border-transparent"}
        cusror-pointer max-sm:flex-1 
    `}
    onClick={handleclick}>
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 
        sm:h-40 rounded-xl max-sm:p-4 ">
        <img src={imageUrl.thumbnail} className='object-contain' alt="Show collection" width={127} height={103}/>
        </div>
    </div>
  )
}

export default ShoeCard
