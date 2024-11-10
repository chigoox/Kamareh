'use client'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import { useCartContext } from '@/StateManager/CartContext'
import useFilterEmptyCategory from '@/app/Hooks/useFilterCategory'
import useWindowDimensions from '@/app/Hooks/useGetWindowDeimentions'
import useScrollPosition from '@/app/Hooks/useScrollPosition'
import { Avatar, Image, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Tab, Tabs } from '@nextui-org/react'
import { MenuIcon, ShoppingBag, User2Icon } from 'lucide-react'
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
        "Home",
        "Shop",

    ];

    return (
        <div className='h-22 bg-white w-full   center-col '>

            <Cart showCart={showCart} setShowCart={setShowCart} />
            {(showLogin && (!user?.uid)) && <LoginCard toggleLogin={toggleLogin} />}
            <Suspense>
                <NavigationEvents setRoute={setNavRoute} />
            </Suspense>


            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Image className='h-20 object-cover' src='/Logo.png' />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Shop
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>

                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
                <NavbarContent justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">zoey@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </NavbarContent>
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
