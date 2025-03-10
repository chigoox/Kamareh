import { siteName } from "@/app/META";
import { isDev } from "@/app/myCodes/Util";
import { NextResponse } from "next/server";
import Stripe from "stripe";



export async function POST(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let { cart, UID, total, cartID } = data
    const session = await stripe.checkout.sessions.create({
        line_items: cart,
        mode: 'payment',
        success_url: `http://${!isDev() ? siteName?.replace(/\s/g, '').replace(/\'/g, '') + '.shop' : 'localhost:3000'}/Checkout/success`,
        cancel_url: `http://${!isDev() ? siteName?.replace(/\s/g, '').replace(/\'/g, '') + '.shop' : 'localhost:3000'}/Checkout/canceled`,
        metadata: {
            uid: UID.toString(),
            cart: JSON.stringify(cart), //for Stripe
            cartID: cartID.toString(),
            total: total,
            type: 'checkout'
        },

    })

    return NextResponse.json(session.url)
}



/*  line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ], */
