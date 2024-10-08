'use client'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import { useCartContext } from '@/StateManager/CartContext'
import useFilterEmptyCategory from '@/app/Hooks/useFilterCategory'
import useWindowDimensions from '@/app/Hooks/useGetWindowDeimentions'
import useScrollPosition from '@/app/Hooks/useScrollPosition'
import { Image, Link } from '@nextui-org/react'
import { MenuIcon, User2Icon } from 'lucide-react'
import { Bebas_Neue, Jost } from 'next/font/google'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { ImHome, ImMenu } from 'react-icons/im'
import { IoBag, IoBagHandle } from 'react-icons/io5'
import LoginCard from '../General/Auth/LoginCard'
import { NavigationEvents } from "../NavigationEvents"
import Cart from './Cart'

const alexFont = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
})
const jost = Jost({
    weight: '400',
    subsets: ['latin'],
})

function NavBar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [navRoute, setNavRoute] = useState([])
    const user = useAUTHListener()
    const [cartCount, setCartCount] = useState()
    const { push } = useRouter()
    const category = useFilterEmptyCategory()
    const { state } = useCartContext()

    let scrollPosition = 1
    scrollPosition = useScrollPosition()
    const { height, width } = useWindowDimensions();

    const NoCart = usePathname().includes('Checkout')

    useEffect(() => {
        setTimeout(() => {
            setCartCount(Object.values(JSON.parse(localStorage?.getItem('Cart'))?.lineItems || {})?.length || 0)
        }, 1000);
    }, [state.lineItems])



    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
        return (!showMobileMenu)
    }
    const [showDeskMenu, setShowDeskMenu] = useState(false)
    const toggleDeskMenu = () => {
        setShowDeskMenu(!showDeskMenu)
        return (!showDeskMenu)
    }




    const toggleLogin = () => {
        if (user?.uid) {
            push(`/User/${user.uid}`)
        } else {
            setShowLogin(!showLogin)

        }
    }


    const menu = ['Home', 'Shop']


    const MenuItem = ({ name, showMobileMenu, disabled }) => {
        return (
            < Link isDisabled={!disabled} href={`/${name == 'Home' ? '/' : `${name}`}`} className={`text-white lg:text-gray-700 items-center gap-1  justify-center ${showMobileMenu ? 'flex' : 'hidden'} lg:block`}>
                {name == 'Home' && <ImHome size={24} className='block lg:hidden' />}
                {name == 'Shop' && <IoBag size={24} className='block lg:hidden' />}
                <h1 className='font-light text-lg hover:font-semibold trans '>{name}</h1>
            </Link>


        )
    }

    return (
        <div className='h-22 bg-white w-full   center-col overflow-hidden'>

            <Cart showCart={showCart} setShowCart={setShowCart} />
            {(showLogin && (!user?.uid)) && <LoginCard toggleLogin={toggleLogin} />}
            <Suspense>
                <NavigationEvents setRoute={setNavRoute} />
            </Suspense>


            <nav className={` ${showMobileMenu ? ' text-black bg-opacity-100' : ' bg-opacity-0'} trans  h-auto bg-black lg:h-16 w-full fixed z-50 top-0  mt-4 `}>

                <div className='absolute flex items-center justify-evenly w-full  p-2 h-full'>
                    <div className={`${showMobileMenu ? 'h-12 opacity-100 ' : 'h-[0px]  opacity-0'}  z-10  flex items-center justify-center gap-4  text-white bg-black absolute w-full  top-10  trans`}>
                        {menu.map((item) => {
                            return (
                                <MenuItem key={item} name={item} showMobileMenu={showMobileMenu} />
                            )
                        })}
                    </div>

                    <div className='relative z-10'>
                        <div className='flex  justify-between  lg:w-[12]'>
                            <button className='right-10 md:right-20 relative' onClick={toggleMobileMenu}>

                                <MenuIcon size={32} color='black' className='lg:hidden' />
                            </button>
                            <button className='right-10 k md:right-20 relative trans' onClick={toggleDeskMenu}>

                                <MenuIcon size={32} color='black' className='lg:block hidden' />
                            </button>
                            {true && <div className={`lg:flex justify-between w- trans-slow hidden  text-black overflow-hidden
                                 lg:text-black ${showDeskMenu ? 'w-40' : 'w-0'}`}>
                                {menu.map((item) => {
                                    return (
                                        <MenuItem disabled={showDeskMenu} key={item} name={item} />
                                    )
                                })}
                            </div>}

                        </div>

                    </div>
                    <div className='font1 relative z-10  font-light text-3xl text-white text-center lg:absolute'>
                        <Link href={'/'} className={`${alexFont.className} relative hover:text-lime-600 z-30 trans top-4`}>
                            <Image className={' h-28 object-cover '} src="/Logo.png" alt="" />

                        </Link>
                        {/*  <h1 className='text-white text-xs font-bold bg-black p-1 rounded z-20 relative'>760 Springfield Ave, Irvington, NJ 07111</h1> */}


                    </div>
                    <div className='center gap-2 left-10 md:left-20 relative text-gray-700 z-10'>
                        <div className=" ">

                            <button className='relative hover:text-black trans h-12' onClick={() => { setShowCart(true) }}>
                                {cartCount > 0 && <div className='absolute border-2  -right-2 bg-black text-white font-bold z-10 h-4 w-4 p-2 bg-opacity-75  center rounded-full '>
                                    {(cartCount) ? cartCount : 0}
                                </div>}
                                <IoBagHandle size={24} />
                            </button>
                        </div>

                        <button className='hover:text-black trans' onClick={() => { toggleLogin() }}>
                            <User2Icon size={24} />
                        </button>
                    </div>
                </div>

            </nav>

        </div >

    )
}

export default NavBar

/* 

routes

shop/Luxury wigs , Luxury bundles , luxury lace , hot tools 
book/book appointments, book a class

*/
