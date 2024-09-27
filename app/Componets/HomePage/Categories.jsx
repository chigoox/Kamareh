'use client'
import { category } from '@/app/META'
import { Button, Image } from '@nextui-org/react'
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
const Masonry = dynamic(() => import("masonry-layout"), {
    ssr: false,
});
function Categories() {

    useEffect(() => {
        var grid = document.querySelector('.grid');
        var msnry = new Masonry(grid, {
            // options...
            itemSelector: '.grid-item',
            columnWidth: 200
        })
    }, [])
    const categories = ['https://selstudios.com/cdn/shop/collections/image_bdd92223-d30d-4c0d-8640-87acab725dd1_1080x.jpg?v=1616776277',

        'https://selstudios.com/cdn/shop/collections/image_34dac6b4-c57b-492e-b4d1-2cd3e82638f2_1080x.jpg?v=1596101816',
        'https://selstudios.com/cdn/shop/collections/image_eff85f84-bdd9-4c2b-9d69-9d263f1489bf_1080x.jpg?v=1585906682',
        'https://selstudios.com/cdn/shop/collections/Photo_May_30_1_29_35_PM_1080x.jpg?v=1622533207',
        'https://selstudios.com/cdn/shop/collections/CABALLOCOLLECTION9_1080x.jpg?v=1628953184',
    ]
    return (
        <div>
            <div className='grid grid-cols-12 gap-4 p-2 lg:p-40 h-auto mt-20'>
                {categories.map((category, index) => {
                    return (
                        <Button className={`grid-item md:col-span-4 border col-span-12 h-fit  p-0 relative`}>
                            <Image src={category} className='h-full w-full' />
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories