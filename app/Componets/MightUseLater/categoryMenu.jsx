import { Image } from '@nextui-org/react'
import React from 'react'

const categoryMenu = () => {
  return (
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
  )
}

export default categoryMenu