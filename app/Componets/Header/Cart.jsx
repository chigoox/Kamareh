import { checkout } from "@/app/myCodes/Stripe"
import Image from "next/image"
import { useCartContext } from "@/StateManager/CartContext";
import ItemQTYButton from "../../Shop/Componets/ItemQTYButton";
import { Trash2Icon } from "lucide-react";
import { useAUTHListener } from "@/StateManager/AUTHListener";
import { fetchDocument, updateDatabaseItem } from "@/app/myCodes/Database";
import { useEffect, useState } from "react";
import ShippinInfo from "../../User/Comonts/ShippinInfo";
import { Button, Card } from "@nextui-org/react";
import { filterNullFromArray, getRand } from "@/app/myCodes/Util";
import { motion, useMotionValue, useTransform } from "framer-motion"
import { AiOutlineClose } from "react-icons/ai";
import Loading from "../General/Loading";
import { message } from "antd";
import { category } from "@/app/META";


function Cart({ showCart, setShowCart }) {

    const { state, dispatch } = useCartContext()
    const { lineItems, total } = state
    const user = useAUTHListener()
    const [event, setEvent] = useState()
    const [shippingData, setShippingData] = useState({})
    const g_u_ID = user?.uid ? user?.uid : user?.gid
    const [isLoading, setIsLoading] = useState(false)
    let checkOutItems = Object.values(lineItems).map(item => ({ name: item.name, price: item.category != 'Tobacco' ? item.priceID : item.price, category: item.category, quantity: Number(item.Qty) }))
    checkOutItems = checkOutItems.map(i => {
        if (i.category != 'Tobacco') {
            delete i.category
            delete i.name
            return i
        } else {

            return {
                price_data: {
                    currency: 'usd',
                    unit_amount: i.price * 100,
                    product_data: {
                        name: i.name.split("").reverse().join(""),
                        description: 'Good Stuff',
                        images: ['https://images.unsplash.com/photo-1514931181523-5fc9ac41ea38?q=80&w=1094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
                    },
                },
                quantity: i.quantity
            }
        }
    })
    const RemoveFromCart = (itemRemove) => {
        dispatch({ type: "REMOVE_FROM_CART", value: itemRemove })
    }


    const [getShippingWindow, setGetShippingWindow] = useState(false)


    useEffect(() => {
        if (g_u_ID && state) updateDatabaseItem('User', g_u_ID, 'cart', state)
    }, [lineItems])

    const getShippingInfo = () => {
        setGetShippingWindow(false)
        if (checkOutItems) checkout(event, [checkOutItems, total], g_u_ID, lineItems)
    }

    const checkShippingInfo = async (_event) => {
        //Always Show ShippingInfo
        setIsLoading(true)
        if (!g_u_ID) message.error('You should signup! Using Guest!')
        if (g_u_ID) await fetchDocument('User', g_u_ID, setShippingData)
        setEvent(_event)
        setGetShippingWindow(true)
        setIsLoading(false)


        //Show shippinginfo if not in database
        /* .then((data) => {
                if (data?.ShippingInfo) {
                    checkout(_event, checkOutItems, g_u_ID)
                } else {
                    setEvent(_event)
                    setGetShippingWindow(true)


                }
            }) */
    }

    useEffect(() => {
        if (!showCart) setGetShippingWindow(false)


    }, [showCart])


    return (
        <motion.div
            onDragEnd={(event, info) => {
                if (info.point.x > 900 && showCart) setShowCart(false)

            }}
            style={{ touchAction: "none" }}
            drag='x'
            dragConstraints={{ left: 0, right: 0, }}
            className={`fixed z-[999] border-l border-dashed border-opacity-50 border-gray-500   md:top-0 top-0 trans  right-0 ${showCart ? 'w-[50vw] md:w-[25vw] p-2' : 'w-[0] P-0 overflow-hidden'} h-[100vh] bg-white text-black `}>
            {isLoading && <Loading />}
            {(getShippingWindow && showCart) && <div className="absolute w-auto z-50  -left-40 ">
                <ShippinInfo defualtData={shippingData} user={user} forCheckOut={getShippingInfo} />
            </div>}
            <Button onClick={() => { setShowCart(!showCart) }} className={`trans text-white bg-black p-2  w-full border-b  border-gray-600  flex z-[9999]  `}>
                Close
            </Button>
            <div className="center gap-2">
                <Button className=" bg-transparent text-gray-500 gap-1 text-sm" onClick={() => { dispatch({ type: "EMPTY_CART", value: null }) }}><Trash2Icon color="red" />Empty</Button>

            </div>
            <div className=" h-[70%] mb-4 m-auto  hidescroll overflow-y-scroll py-2 start-col gap-1">
                {Object.values(lineItems).map(item => {
                    return (
                        <div key={item.priceId + getRand()} className="h-52 md:h-48  flex-shrink-0 border-b-2 border-gray-700  relative">
                            <div className="evenly gap-2 relative h-1/2 top-4 ">
                                <Card shadow="true" className={'w-24 h-full relative bg-black overflow-hidden'}>
                                    <Image fill src={item.images ? item.images[0] : ''} alt="" />

                                </Card>
                                <div className="p-1  w-1/2">
                                    <h1 className="md:text-lg">{item.name?.substr(0, 20)}{item?.name?.length > 20 ? '...' : ''}</h1>
                                    {item?.variant && <h1 className="font-light text-xs h-4 overflow-hidden">{item?.variant}</h1>}
                                    <h1 className="font-bold">{String(item?.price).includes('$') ? '' : '$'}{item?.price}</h1>
                                </div>


                            </div>
                            <div className={'text-black mt-8'}>
                                <ItemQTYButton product={item} forCart={true} />
                            </div>
                            <Button onClick={() => { RemoveFromCart(item) }} className="h-6 mb-2 rounded-t-md font-semibold w-24  center text-red-500 bg-gray-600 m-auto bottom-0  ">
                                <Trash2Icon />
                            </Button>
                        </div>
                    )
                })}

            </div >
            <div className="center-col relative bottom-4 text-white">
                <div className={`${showCart ? 'scale-1' : 'scale-0'} trans-slow evenly w-full `}>
                    <h1 className="">Total</h1>
                    <h1 className="font-extrabold">${total}</h1>
                </div>


                <Button onClick={(event) => {
                    checkShippingInfo(event)

                }} className="w-3/4 bg-blue-700 text-white font-bold rounded hover:text-lg trans">
                    <h1>CheckOut</h1>
                </Button>

            </div>

        </motion.div >
    )
}

export default Cart