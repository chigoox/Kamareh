'use client'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import React from 'react'

const product = {
    name: 'shirt',
    price: '0.00',
    category: 'shirt',
    tags: [],
    likes: [1, 2, 4],
    showLikes: true,
    images: ["/Images/guy (5).jpg", "/Images/guy (6).jpg", "/Images/guy (7).jpg"],
    desc: 'a cool shirt',
    variants: []
}
const produc2 = {
    name: 'shirt',
    price: '0.00',
    category: 'shirt',
    tags: [],
    likes: [1, 2, 4],
    showLikes: true,
    images: ["/Images/guy (6).jpg", "/Images/guy (6).jpg", "/Images/guy (7).jpg"],
    desc: 'a cool shirt',
    variants: []
}

const Products = () => {
    const items = [product, produc2, product]
    return (
        <div className='grid grid-cols-2 border w-full gap-4 p-1 md:grid-cols-3 lg:grid-cols-4'>
            {items.map((item, index) => {
                return (
                    <Card className='h-96 rounded-none' shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="rounded-none overflow-visible p-0 relative">
                            <Image
                                shadow="sm"
                                radius="lg"

                                alt={item.images[0]}
                                className=" h-[20rem] object-cover rounded-none"
                                src={item.images[0]}
                            />
                        </CardBody>
                        <CardFooter className="  z-10 w-full center-col bg-black text-white bg-opacity-70 bottom-0 right-0 text-small justify-between">
                            <b>{item.name}</b>
                            <p className="text-default-500">{item.price}</p>
                        </CardFooter>

                    </Card>
                )
            })}
        </div>
    )
}

export default Products