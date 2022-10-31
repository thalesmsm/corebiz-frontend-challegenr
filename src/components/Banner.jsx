import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import banner01 from '../images/banner-image-01.png'
import banner02 from '../images/banner-image-02.png'
import banner03 from '../images/banner-image-03.png'

function Banner() {
  const mystyle = {
    width: '100%',
    backgroundSize: 'auto',
    height: '280px',
  };
  return ( 
    <section>
      <Carousel controls={false}>
        <Carousel.Item interval={3000}>
          <img
            style={mystyle}
            src={banner01}
            alt="Image One"
          />
          <Carousel.Caption 
          >
            <div style={{
              position: 'absolute',
              left: '-40px',
              top: '-120px',
              width: '300px'
            }}>
              <h5>Olá, o que você está procurando</h5>
              <h3 style={{fontSize: 32}}>Criar ou migrar seu e-commerce?</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            style={mystyle}
            src={banner02}
            alt="Image Two"
          />
          <Carousel.Caption>
            <div style={{
              position: 'absolute',
              left: '-40px',
              top: '-120px',
              width: '300px'
            }}>
              <h5>Olá, o que você está procurando</h5>
              <h3 style={{fontSize: 32}}>Criar ou migrar seu e-commerce?</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            style={mystyle}
            src={banner03}
            alt="Image Three"
          />
          <Carousel.Caption>
            <div style={{
              position: 'absolute',
              left: '-40px',
              top: '-120px',
              width: '300px'
            }}>
              <h5>Olá, o que você está procurando</h5>
              <h3 style={{fontSize: 32}}>Criar ou migrar seu e-commerce?</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Banner;