import { Button, Card, Image, Input, Link, Image } from "@nextui-org/react";


function AboutUs() {
  return (
    <div className='bg-white hidescroll  h-screen   relative overflow-x-hidden'>
    <div className={`center-col w-full md:w-1/3 p-2`}>

       <div className={``}>
       About Us Welcome to Kamareh — a brand that celebrates individuality, versatility, and timeless style.
       Founded in 2024 by Mameh Kamara, Kamareh is a reflection of its founder’s unique approach to fashion.
       The name “Kamareh” is a blend of Mameh’s first and last name, symbolizing the seamless fusion of personal
       identity and creative expression. 
     </div>
      <Image src={'Images/guy (02).jpg'} alt='picture'/>
      <div className={``}>
       Kamareh was born out of Mameh’s desire to offer a clothing line that transcends traditional boundaries.
        Inspired by her own fluid sense of style, Kamareh is designed for those who refuse to be boxed into one
        category of fashion. Whether you’re drawn to the edge of streetwear or the sophistication of classical styles,
        Kamareh offers a diverse range of pieces that allow you to express yourself freely, without compromise.        
      </div>
      <div className={``}>
        At Kamareh, we believe that clothing is a canvas for personal expression. Our collections are meticulously crafted
        to blend comfort, quality, and versatility, empowering individuals to mix and match, experiment, and create their own
        signature look. We are proud to provide fashion-forward designs that cater to those who embrace the freedom to define
        their own style—whether it’s sleek, casual, bold, or refined. 
      </div>

      <div className={``}>
        Kamareh is more than just a brand; it’s a movement for those who celebrate the beauty of diversity in fashion
        . For those who don’t follow trends but set them. We’re here for the people who see fashion as limitless,
        and we’re excited to help you create your own unique statement.
      </div>
      
    </div>
    </div>
  )
}

export default AboutUs
