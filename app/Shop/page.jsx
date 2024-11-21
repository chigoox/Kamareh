'use client'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { DivideSquare, SlidersIcon } from 'lucide-react';
import { Button } from '@nextui-org/react';
import ShopItem from './Componets/ShopItem';
import { Grid } from 'antd';
const page = () => {


    //get Category name
    const searchParams = useSearchParams()
    const pageName = searchParams.get('name')

    const mocItems = [1, 1, 1, 1, 1, 1]

    return (
        <div className='p-2'>
            <h1 className='text-3xl font-bold mt-10 p-2'>{pageName}</h1>
            <br />
            <br />
            <Button className='p-2 bg-opacity-0  gap-2 '>
                <SlidersIcon />
                <p>filter & sort</p>
            </Button>
            <br />
            <br />
            <div className='grid grid-cols-2 md:grid-cols-3 '>
                {mocItems.map((item) => {


                    return (<ShopItem />)
                })}
            </div>



        </div>
    )
}

export default page