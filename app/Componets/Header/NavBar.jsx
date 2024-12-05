'use client'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import { useCartContext } from '@/StateManager/CartContext'
import useFilterEmptyCategory from '@/app/Hooks/useFilterCategory'
import useWindowDimensions from '@/app/Hooks/useGetWindowDeimentions'
import useScrollPosition from '@/app/Hooks/useScrollPosition'
import { Avatar, Image, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Tab, Tabs } from '@nextui-org/react'
import { MenuIcon, ShoppingBag, ShoppingCartIcon, User2Icon } from 'lucide-react'
import { Bebas_Neue, Jost } from 'next/font/google'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { ImHome, ImMenu } from 'react-icons/im'
import { IoBag, IoBagHandle } from 'react-icons/io5'
import LoginCard from '../General/Auth/LoginCard'
import { NavigationEvents } from "../NavigationEvents"
import Cart from './Cart'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    const menuItems = [
        "HOME",
        "NEW ARRIVALS",
        "ABOUT US"


    ];

    return (
        <div className='h-22 bg-white w-full   center-col '>

            <Cart showCart={showCart} setShowCart={setShowCart} />
            {(showLogin && (!user?.uid)) && <LoginCard toggleLogin={toggleLogin} />}
            <Suspense>
                <NavigationEvents setRoute={setNavRoute} />
            </Suspense>


            <Navbar disableAnimation={true} className='bg-white' isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        icon={<IoMenu size={32} />}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden text-black"
                    />

                </NavbarContent>

                <NavbarContent>
                    <NavbarBrand>
                        <Image className='h-20 object-cover relative right-10' src='/Logo.png' />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className=" sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Button onPress={() => { setShowCart(true) }} className='p-0 bg-opacity-0 min-w-0'>
                            <ShoppingCartIcon />

                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu className='py-20 w-2/3 bg-white'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                onClick={() => { setIsMenuOpen(false); console.log(isMenuOpen)}}
                                color={
                                    "foreground"
                                }
                                className="w-full text-xl "
                                href={{
                                    pathname: (item != ('HOME') && item != ('ABOUT US')) ? `/Shop` : item == ('HOME') ? `/` : `/AboutUs`  ,
                                    query: (item != ('HOME') && item != ('ABOUT US'))  ? { name: item } : null
                                }}
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

            </Navbar>






        </div >

    )
}

export default NavBar

/* 

routes

shop/Luxury wigs , Luxury bundles , luxury lace , hot tools 
book/book appointments, book a class

*/
