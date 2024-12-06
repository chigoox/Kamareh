'use client'
import { getRand } from '@/app/myCodes/Util';
import { Button, Card, Skeleton } from "@nextui-org/react";
import { Dosis, Grandstander, Courier_Prime } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductView from './ProductView';
const font = Courier_Prime({ subsets: ['latin'], weight: ['400'] })
const font2 = Courier_Prime({ subsets: ['latin'], weight: ['400'] })
export const MONEYFONT = font2
import { FaShoppingCart } from "react-icons/fa";


function ShopItem({ shopItems, location = 'HotTools', onShopPage }) {
    const { name, images, metadata } = shopItems ? shopItems : { name: 'Item', images: [] }
    console.log(name)
    const { price } = metadata || { price: 0 }
    const [productsLoaded, setProductsLoaded] = useState(false)
    const [ShowQuickView, setShowQuickView] = useState(false)
    // const stars = Array.apply(null, Array(rating))
    const awaitLoading = () => {
        setTimeout(() => {
            if (name) setProductsLoaded(true)
        }, getRand(500));
    }

    const toggleQuickView = () => {
        console.log(shopItems)
        if (ShowQuickView == false) return setShowQuickView(shopItems)
        setShowQuickView(false)
    }

    useEffect(() => {
        awaitLoading()
    }, [name])
    return (
        <div className=' fadeInZoom flex-shrink-0 m-auto h-96    w-40 md:h-64  md:w-64  my-2     border-[#474747]   relative   overflow-hidden'>
            <ProductView
                showShopView={ShowQuickView}
                setShowShopView={setShowQuickView}
            />
            <div className='group '>
                <Link className='center-col relative' href={`/Shop/${location}/${name?.replace(/\s/g, '')}`}>
                    <Skeleton isLoaded={productsLoaded} className='w-auto h-auto rounded-lg '>
                        <Card className={'h-72 w-40  relative rounded-lg overflow-hidden bg-white'}>
                            <Image width={1920} height={1080} quality={100} src={images[0] || 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className=' m-auto h-full w-full object-cover' alt="" />

                        </Card>
                    </Skeleton>
                    <Button onPress={(event) => { toggleQuickView(event) }} className='w-12 h-12 min-w-0 absolute bottom-2 right-2 rounded-full m-auto p-3 bg-black text-white center font-bold block md:hidden md:group-hover:block   hover:bg-black-800 '>
                        <FaShoppingCart size={32} />
                    </Button>
                </Link>
                <div className='   bottom-0  w-full flex items-center flex-col p-2'>
                    <div className={'font.className border-4  trans overflow-hidden   h-12 w-full'}>
                        <h1 className='md:text-lg text-black  w-24  h-12'>test{name.substr(0, 50) + name.length > 50 ? '...' : ''}</h1>
                    </div>
                    <div className=' w-full center gap-1'>
                        <span className='font-extralight text-sm'>$</span><span className='text-2xl font-semibold'>
                            <Skeleton isLoaded={productsLoaded} className='w-auto h-auto bg-gray-400 '>
                                <h1 className={font2.className}><Skeleton isLoaded={price} className='rounded'>{price}</Skeleton></h1>

                            </Skeleton>
                        </span>
                    </div>

                </div>




            </div>


        </div>
    )
}

export default ShopItem
