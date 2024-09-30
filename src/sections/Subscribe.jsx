import Button from "../Components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className=" max-container flex justify-between items-center max-lg:flex-col w-full gap-10">
        <h3 className="text-4xl leading-[68px] font-palanquin font-bold"> Sign up for <span className="text-coral-red">Updates</span> & Newsletter </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-4 sm:border-slate-50-gray rounded-full">
          <input type="text" placeholder="subscribe@ni@com" className="input"/>
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button lable={'Sign up'} fullwidth />
          </div>
        </div>
    </section>
  )
}

export default Subscribe
