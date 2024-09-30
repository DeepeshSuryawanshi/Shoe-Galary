import { arrowRight } from "../assets/icons"
import Button from "../Components/Button"
import { shoes, statistics } from "../Constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../Components/ShoeCard"
import { useState } from "react"



const Hero = () => {

  const [BigShoeImg, setBigShoeImg] =useState(bigShoe1);  

return (
 <section id="home" className="w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
       
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[52px] max-sm:leading-[1] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10  max-sm:pr-10">The New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3 max-sm:mt-1">Nike</span>Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-9
        sm:max-w-sm
        ">Discover Stylish Nike Arrivels, Quality Comfort and innovation for your active life</p>
        
        <Button lable="Shop Now" iconUrl={arrowRight}/>
        <div className="flex justify-center items-start flex-wrap w-full max-sm:mt-10 mt-20 gap-16">
          {statistics.map((sta,index)=>(
            <div key={index}>
              <p className="text-4xl max-sm:text-3xl font-palanquin font-bold">{sta.value}</p>
              <p className="leading-7  max-sm:leading-5 font-montserrat text-slate-gray font-semibold">{sta.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={BigShoeImg} alt="Show Collection" width={610} height={500}
        className="object-contain relative z-10 "
        />
        <div className="flex justify-center sm:gap-6 sm:left-[10%] gap-4 absolute -bottom-[7%] max-sm:px-6 px-14">
          {shoes.map((shoe,index)=>(
            <div key={shoe}> 
              <ShoeCard
              imageUrl={shoe}
              changeimage={(shoe)=>{setBigShoeImg(shoe)}}
              BigShoeImg={BigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
 </section>
  )
}

export default Hero
