'use client'

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

export const SortProductsComponet = ({ PRODUCTS, setSortedProduct, visable, setVisable }) => {
    const [sortBy, setSortBy] = useState()
    const sortList = ['A-Z', 'Z-A', '$-$$$', '$$$-$', 'Newest', 'Most Popular']


    let result = []

    switch (sortBy) {
        case sortList[0]:
            result = PRODUCTS?.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : ((b.name.toUpperCase() > a.name.toUpperCase()) ? -1 : 0))
            break

        case sortList[1]:

            result = PRODUCTS?.sort((a, b) => (b.name.toUpperCase() > a.name.toUpperCase()) ? 1 : ((a.name.toUpperCase() > b.name.toUpperCase()) ? -1 : 0))


            break


        case sortList[2]:
            result = PRODUCTS?.sort((a, b) => b.metadata.price - a.metadata.price)

            break

        case sortList[3]:
            result = PRODUCTS?.sort((a, b) => a.metadata.price - b.metadata.price)


            break
        case sortList[4]:

            result = PRODUCTS?.sort((a, b) => b.created - a.created)
            break

        case sortList[5]:
            result = PRODUCTS?.sort((a, b) => b.metadata?.unitsSold - a.metadata?.unitsSold)

            break

        default:
            result = PRODUCTS?.sort((a, b) => b.updated - a.updated)
            break


    }

    useEffect(() => {
        if (!setSortedProduct || result) return
        setSortedProduct(result)
    }, [result])


    return (<div>
        <div className="SORT flex hidescroll w-full overflow-x-scroll gap-2 p-2">
            {sortList.map(i => {
                return (
                    <Button onPress={() => { setSortBy(sortBy == i ? 'none' : i); setVisable(false) }} className={`w-24 bg-black-800 trans min-h-0  text-white border-black  ${sortBy == i ? 'bg-lime-400' : ''} ${visable ? 'h-8 p-2' : 'p-0 h-0'}`}>{i}</Button>
                )
            }

            )}
        </div>
    </div>)
}
