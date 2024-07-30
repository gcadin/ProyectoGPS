import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import MascotasList from '../pages/mascotas/listarMascotas';

function CustomCarousel() {
    return (
      <>
        <Carousel>
            <Carousel.Item >
              <Image src='/banner1.jpeg'></Image>
              <Carousel.Caption>
                <h3>Adopta un perrito</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <Image src='/banner2.jpg' width={1900} height={900}></Image>
              <Carousel.Caption>
                <h3>Te estamos esperando</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <Image src='/banner3.jpeg'></Image>
              <Carousel.Caption>
                <h3>Haz tu donativo, cada peso importa</h3>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <MascotasList />
      </>
        
    );
}

export default CustomCarousel;