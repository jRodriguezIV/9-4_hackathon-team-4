import { Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./CarouselComp.css";
import image1 from "../../../src/assets/Carousel1.jpg"
import image2 from "../../../src/assets/Carousel2.jpg"
import image3 from "../../../src/assets/Carousel3.jpg"
import image4 from "../../../src/assets/Carousel4.jpg"

export default function CarouselComp() {

    return (
        <Carousel
            autoFocus={true}
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={1500}
        >

            <div key={"image1"}>
                <img 
                  src={image1}
                  alt={"image1"}
                  style={{ height: "50%"}}
                  />
            </div>
            <div key={"image2"}>
                <img 
                  src={image2}
                  alt={"image2"}
                  style={{minHeight: "auto"}}
                 />
            </div>
            <div key={"image3"}>
                <img 
                  src={image3}
                  alt={"image3"}
                  style={{minHeight: "auto"}}
                 />
            </div>
            <div key={"image4"}>
                <img 
                  src={image4}
                  alt={"image4"}
                  style={{minHeight: "auto"}}
                  />
            </div>
        </Carousel>
    )
}