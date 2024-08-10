'use client'
import { Button, Image } from '@nextui-org/react'
import { Card } from 'antd'
import React from 'react'

function FeaturedCategory() {
    const category = [
        {
            name: 'fishnet 1',
            price: 120,
            img: 'https://selstudios.com/cdn/shop/files/03903279-71B7-4E8F-804C-80A6740F3830_2048x.jpg?v=1697087886'
        },
        {
            name: 'cool knit',
            price: 120,
            img: 'https://selstudios.com/cdn/shop/products/image_931ee12e-f06a-438b-a9bf-a75475c09f10_1080x.jpg?v=1660319973'
        },
        {
            name: 'texter',
            price: 120,
            img: 'https://selstudios.com/cdn/shop/products/image_894597db-9080-47d6-a213-bfc6378f7684_1080x.jpg?v=1660319176'
        }]
    return (
        <div className='h-auto p-2 mt-10 '>
            <h1 className='text-center  text-2xl my-8'>{'category Name'}</h1>
            <div className='flex justify-center flex-col md:flex-row gap-4'>
                {category.map(item => {
                    return (
                        <Button className='relative p-0 block bg-opacity-0 h-auto md:w-96 '>
                            <Card className='h-[22rem] md:w-96 p-0 overflow-hidden  border-none'>
                                <Image className='h-96 w-96 object-cover' src={item.img} />
                            </Card>
                            <div className='center-col group md:h-full  md:absolute md:top-0 z-10 mt-2  w-full md:hover:bg-gray-100 md:hover:bg-opacity-50'>
                                <h1 className='md:group-hover:opacity-100 font-light text-lg md:opacity-0 trans'> {item.name}</h1>
                                <h1 className='md:group-hover:opacity-100 font-light text-lg md:opacity-0 trans'> ${item.price}</h1>
                            </div>
                        </Button>
                    )
                })}

            </div>
        </div>
    )
}

export default FeaturedCategory