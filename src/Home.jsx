
//import img1 from './media/pizza.jpeg'
import img2 from './assets/browniebox.jpeg'
import img3 from './assets/cupcake.jpeg'
//import img4 from './media/customcake.jpeg'

import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Home extends Component {
    render () {
        return (
    <>
            <Carousel>
                <div>
                    <img className="object-contain h-auto max-w-full mx-auto" src={img2} alt="img" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-6xl font-bold">Freshly Baked </h2>
                    </div>  
                </div>
                <div>
                    <img className="object-contain h-auto max-w-full mx-auto" src={img3} alt="img"/>
                    <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-6xl font-bold">SINCE 2022</h2>
                    </div>
                </div>
                
            </Carousel>
            </>
            );
    }
};


export default Home;
