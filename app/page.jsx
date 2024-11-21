
import { Button, Card, Image, Input, Link } from "@nextui-org/react";
import ProductsList from "./Shop/Componets/ProductsList";
import { createArray, getRand } from "./myCodes/Util";
import MedicalCardMain from "./Componets/General/MedicalCardMain";
import Footer from "./Componets/Footer";
import EmblaCarousel from "./Componets/HomePage/Carousel";
import FeaturedCategory from "./Componets/HomePage/FeaturedCategory";
import Categories from "./Componets/HomePage/Categories";
import CategoryTabs from "./Componets/HomePage/CategoryTabs";
import Products from "./Componets/HomePage/Products";
//import ProductView from '../Support/ProductView';

function Home() {
  return (
    <div className='bg-white hidescroll  h-screen   relative overflow-x-hidden'>
      {/*       <MedicalCardMain /> */}
      <EmblaCarousel
        noArrow={true}
        vid={'videos/MOV_3270.MOV'}

      />


      {/* <Image className=" border-white fadeIn  h-auto object-cover" src="/LogoW.png"></Image> */}
     
    </div>
  )
}

export default Home
