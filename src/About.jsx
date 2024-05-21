import React from 'react'
import logo from './assets/image0.png'
const About = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
<div className="rounded overflow-hidden shadow-lg">
  <img style={{height:180, width:180}}  src={logo} alt="Mountain"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">ABOUT US</div>
    <p className="text-gray-700 text-base">
      Home Baker with a strong desire in giving everybody home made cakes and snacks without any artificial food colouring or chemicals.Serving Taste buds SINCE 2022!
    </p>
  </div>
</div>
<h1 className="animate-slidein text-center text-pink-600  font-bold text-gray-900 text-5xl dark:text-white ">FROM OUR <br></br>OVEN<br></br> TO YOUR<br></br> KITCHEN</h1>
<div className="rounded overflow-hidden shadow-lg">
  <img style={{height:180, width:180}} src={logo} alt="River"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">PROCESS</div>
    <p className="text-gray-700 text-base">
      Whenever in need of baked items or snacks make a booking through whatsapp and get yourself treated with fresh home made snacks . Ordered will be delivered to your requested address
    </p>
  </div>
</div>
    </div>
    </>
  )
}

export default About
