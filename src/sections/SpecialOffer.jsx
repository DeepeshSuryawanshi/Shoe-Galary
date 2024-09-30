import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-wrap max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" alt="" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold max:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap text-coral-red relative z-10  max-sm:pr-10">Special </span>
          offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously
          crafted footwear is designed to elevate your experience,
          providing you with unmatched quality, innovation, and a
          touch of elegance.
        </p>
        <p className="mt-4 mb-4 lg:max-w-lg info-text" >
        Our dedication to detail and excellence ensures your
        satisfaction.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
        <Button lable="Shop Now" iconUrl={arrowRight} />
        <Button lable="Learn More"
        backgroundColor="bg-white"
        borderColor="border-salety-gray"
        textColor="text-salety-gray"
        />
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer
