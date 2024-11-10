
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
        img1={'/Images/ban1.jpg'}
        img2={'/Images/ban2.jpg'}
      />


      {/* <Image className=" border-white fadeIn  h-auto object-cover" src="/LogoW.png"></Image> */}
      <div className=" relative h-screen w-full bg-black rounded-b-2xl overflow-hidden">
        <div className="center-col mt-40 gap-1 h-full w-full">
          <h1 className="text-3xl text-white text-center font-bold p-2">Where style speaks, trends resonate,  fashion flurishes</h1>
          <p className="font-light text-gray-300 text-center text-xs">unveiling a fashion destination were trends blend shamelessly with your individual style aspiration. discover today!</p>

          <Button className="mt-2 w-32 bg-white">Shop Now</Button>

          <div className="flex gap-2 p-4  3">
            <Button className="bg-opacity-0 w-auto p-1 h-auto block ">
              <Image className="rounded-full -rotate-3 h-64 object-cover" src="/Images/guy (1).jpg" />
              <div className=" center-col text-white border-white w-3/4 m-auto h-12 mt-1">
                <p className="text-sm">A shirt</p>
                <p className="text-sm">$0.00</p>
              </div>
            </Button>
            <Button className="bg-opacity-0 w-auto p-1 h-auto block ">
              <Image className="rounded-full  h-64 object-cover" src="/Images/guy (4).jpg" />
              <div className=" center-col text-white border-white w-3/4 m-auto h-12 mt-1">
                <p className="text-sm">A shirt</p>
                <p className="text-sm">$0.00</p>
              </div>
            </Button>
            <Button className="bg-opacity-0 w-auto p-1 h-auto block ">
              <Image className="rounded-full rotate-3 h-64 object-cover" src="/Images/guy (3).jpg" />
              <div className=" center-col text-white border-white w-3/4 m-auto h-12 mt-1">
                <p className="text-sm">A shirt</p>
                <p className="text-sm">$0.00</p>
              </div>
            </Button>
          </div>

          <Image className="rounded-none m-auto   object-cover w-full" src="/Images/guy (2).jpg" />
        </div>
      </div>
      <div className="h-screen mt-12">
        <CategoryTabs />
        <Products />

      </div>

    </div>
  )
}

export default Home
