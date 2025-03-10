'use client'
import { usePathname } from 'next/navigation'
import Product from '../../Componets/Product'



export default function ItemPage({ }) {

    const productCategory = usePathname().replace(`/Shop/`, '').replace(/\/(.*)/, '')
    const productPathName = usePathname().replace(`/Shop/${productCategory}/`, '')

    return (
        <div className=''>
            < Product product={productPathName} category={productCategory} />
        </div>
    )

}




