
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
      <div className=" relative h-screen w-full bg-black  overflow-hidden">
        <div className="center-col  gap-1 h-full w-full">
          <h1 className="text-3xl text-white text-center font-bold p-2">Where style speaks, trends resonate,  fashion flurishes</h1>
          <p className="font-light text-gray-300 text-center text-xs">unveiling a fashion destination were trends blend shamelessly with your individual style aspiration. discover today!</p>

          <Button className="mt-2 w-32 bg-white">Shop Now</Button>

          <div className="flex gap-2 p-4  3">
            <Button className="bg-opacity-0 w-auto p-1 h-auto block ">
              <Image className="rounded-none h-64 object-cover" src="/Images/guy (1).jpg" />
              <div className=" center-col text-white border-white w-3/4 m-auto h-12 mt-1">
                <p className="text-sm">A shirt</p>
                <p className="text-sm">$0.00</p>
              </div>
            </Button>
            <Button className="bg-opacity-0 w-auto p-1 h-auto block ">
              <Image className="rounded-none  h-64 object-cover" src="/Images/guy (4).jpg" />
              <div className=" center-col text-white border-white w-3/4 m-auto h-12 mt-1">
                <p className="text-sm">A shirt</p>
                <p className="text-sm">$0.00</p>
              </div>
            </Button>
            <Button className="bg-opacity-0 w-auto p-1 h-auto block ">
              <Image className="rounded-none  h-64 object-cover" src="/Images/guy (3).jpg" />
              <div className=" center-col text-white border-white w-3/4 m-auto h-12 mt-1">
                <p className="text-sm">A shirt</p>
                <p className="text-sm">$0.00</p>
              </div>
            </Button>
          </div>


        </div>
      </div>
      <div className="h-screen mb-20 center-col">
        <div className=" relative bg-black h-72 overflow-hidden">
          <Image className="rounded-none  object-cover w-full" src="/Images/guy (2).jpg" />
          <h1 className="text-3xl z-20 top-2 right-2 absolute text-black">Shirts</h1>
        </div>
        <div className=" relative bg-black h-72 overflow-hidden">
          <Image className="rounded-none w-full" src="https://cdn.shopify.com/s/files/1/0293/9277/files/08-07-24_S5_16_ZDFN1627_Charcoal_KJ_MC_10-52-31_4587_CM.jpg?v=1723152115&width=1000&height=1500&crop=center" />
          <h1 className="text-3xl z-20 top-2 left-2 absolute">Skirt</h1>
        </div>
        <div className=" relative bg-black h-72 md:h-96 overflow-hidden">
          <Image className="rounded-none w-full" src="https://cdn.shopify.com/s/files/1/0293/9277/files/09-04-24_S4_35_75513_Camel_CZ_IM_11-42-07_PLUS_61989_PXF.jpg?v=1725557043&width=1000&height=1500&crop=center" />
          <h1 className="text-3xl z-20 top-2 right-2 absolute">Jackets</h1>
        </div>
        <div className=" relative bg-black h-72 m-auto overflow-hidden">
          <Image className="rounded-none w-full" src="https://cdn.shopify.com/s/files/1/0293/9277/files/06-17-24_S1_46_22GWF0958_Black_AZ_PC_11-49-16_39051_SL.jpg?v=1719256953&width=1000&height=1500&crop=center" />
          <h1 className="text-3xl z-20 top-2 left-2 absolute">Pants</h1>
        </div>

      </div>

    </div>
  )
}

export default Home
