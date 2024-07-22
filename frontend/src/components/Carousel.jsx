import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function CustomCarousel() {
    return (
        <Carousel>
            <Carousel.Item >
              <Image src='/banner1.jpeg'></Image>
              <Carousel.Caption>
                <h3>First slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <Image src='/banner2.jpg' width={1900} height={900}></Image>
              <Carousel.Caption>
                <h3>Second slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <Image src='/banner3.jpeg'></Image>
              <Carousel.Caption>
                <h3>Third slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CustomCarousel;