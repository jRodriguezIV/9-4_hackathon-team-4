import { Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./CarouselComp.css";
import image1 from "../../../src/assets/Carousel1.jpg"
import image2 from "../../../src/assets/Carousel2.jpg"
import image3 from "../../../src/assets/Carousel3.jpg"
import image4 from "../../../src/assets/Carousel4.jpg"

export default function CarouselComp() {

    return (
        <div className='CarouselContainer'>
        <Carousel
            autoFocus={true}
            showThumbs={false}
            showArrows={false}
            infiniteLoop={true}
            autoPlay={true}
            dynamicHeight={false}
            stopOnHover={false}
            width={"70%"}
            interval={4000}
        >

            <div key={"image1"}>
                <img 
                  src={image1}
                  alt={"image1"}
                  />
            </div>
            <div key={"image2"}>
                <img 
                  src={image2}
                  alt={"image2"}
                 />
            </div>
            <div key={"image3"}>
                <img 
                  src={image3}
                  alt={"image3"}
                 />
            </div>
            <div key={"image4"}>
                <img 
                  src={image4}
                  alt={"image4"}
                  />
            </div>
        </Carousel>
        </div>
    )
}