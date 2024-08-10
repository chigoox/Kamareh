
import { Button, Card, Image, Input, Link } from "@nextui-org/react";
import { Mail } from "lucide-react";
import ProductsList from "./Shop/Componets/ProductsList";
import { createArray, getRand } from "./myCodes/Util";
import MedicalCardMain from "./Componets/General/MedicalCardMain";
import Footer from "./Componets/Footer";
import EmblaCarousel from "./Componets/HomePage/Carousel";
import FeaturedCategory from "./Componets/HomePage/FeaturedCategory";
import Categories from "./Componets/HomePage/Categories";
//import ProductView from '../Support/ProductView';

function Home() {
  return (
    <div className='bg-white hidescroll  h-screen   relative overflow-x-hidden'>
      {/*       <MedicalCardMain /> */}
      <EmblaCarousel
        noArrow={true}
        img1={'https://selstudios.com/cdn/shop/products/PhotoMay30_105309AM_1296x.jpg?v=1622532549'}
        img2={'https://selstudios.com/cdn/shop/products/CABALLOCOLLECTION2_1080x.jpg?v=1628955272'}
        img3={'https://selstudios.com/cdn/shop/files/FCC6CFF0-C842-4BC6-8F22-71C079EB6ACD.jpg?v=1697136692'}
        img4={'https://selstudios.com/cdn/shop/products/image_e2a46654-3b89-4bb9-98d4-54da96b36819.jpg?v=1585906880'}
      />

      <FeaturedCategory />
      <Categories />


    </div>
  )
}

export default Home
