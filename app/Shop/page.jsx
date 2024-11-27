'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { DivideSquare, SlidersIcon } from 'lucide-react';
import { Button } from '@nextui-org/react';
import ShopItem from './Componets/ShopItem';
import { Grid } from 'antd';
import { SortProductsComponet } from './Componets/SortProducts';
import { fetchAllProducts } from '../myCodes/Stripe';
const page = () => {


    //get Category name
    const searchParams = useSearchParams()
    const pageName = searchParams.get('name')

    const mocItems = [1, 1, 1, 1, 1, 1]
    const sortList = ['A-Z', 'Z-A', '$-$$$', '$$$-$', 'Newest', 'Most Popular']
    const [showSortList, setShowSortList] = useState(false)

    const [PRODUCTS, setPRODUCTS] = useState([])
    const [sortBy, setSortBy] = useState('none')
    const [Search, setSearch] = useState('')
    const [category, setCategory] = useState('All')


console.log(PRODUCTS)


    useEffect(() => {
        const getData = async () => {
            const STRIPE_PRODUCTS = await fetchAllProducts(null, 108)
            

            const products = [...STRIPE_PRODUCTS]
            setPRODUCTS(Object.values(
                filterObject(products, (v) => {
                    return (Object.keys(v.metadata).length > 0) && (v.active) && (v.images.length > 0)
                })
            ))

        }

        getData()



    }, [])


    return (
        <div className='p-2'>
            <h1 className='text-3xl font-bold mt-10 p-2'>{pageName}</h1>
            <br />
            <br />
            <Button onPress={() => setShowSortList(!showSortList)} className='p-2 bg-opacity-0  gap-2 '>
                <SlidersIcon />
                <p>filter & sort</p>
            </Button>
            <SortProductsComponet setVisable={setShowSortList} visable={showSortList} />
            <br />
            <br />
            <div className='grid grid-cols-2 md:grid-cols-3 '>
                {PRODUCTS.map((item) => {


                    return (<ShopItem />)
                })}
            </div>



        </div>
    )
}

export default page
