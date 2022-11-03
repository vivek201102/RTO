

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function DemoCarousel(){

    return (
        <>
       
        <Carousel>
            
            <div>
                <img src="./rto3.jpeg" alt="rto3"/>
            </div>
            <div>
                <img src="./rto1.jpeg" alt="rto1"/>
            </div>
            <div>
                <img src="./rto2.jpeg" alt="rto2"/>
                
            </div>
        </Carousel>

       
        </>
    );
    
}


export default DemoCarousel;