import {
  Hero,
  PorulerProduct,
  Subscribe,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Footer
} from './sections'
import Nav from './Components/Nav';
import Button from './Components/Button';

const App = ()=>(
  <main className="relative w-full">
      <Nav/>
    <section className="xl:padding-1 padding wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PorulerProduct/>
    </section>
    
    <section className="padding">
     <SuperQuality/>
    </section>
    
    <section className="padding-x py-10">
      <Services/>
    </section>
    
    <section className="padding">
      <SpecialOffer/>
    </section>

    <section className="padding bg-pale-blue">
      <CustomerReviews/>
    </section>

    <section className="padding w-full sm:py-32 py-16">
      <Subscribe/>
    </section>
    
    <section className="padding-x padding-t pb-8 bg-black  ">
      <Footer/>
    </section>
  </main>
)
export default App;