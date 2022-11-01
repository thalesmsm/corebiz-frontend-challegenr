import React, { useEffect, useState, useRef, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Context } from '../context/Context';
import setaesquerda from '../images/216151_left_chevron_icon.png'
import setadireita from '../images/216151_right_chevron_icon.png'
import stars from '../images/5-stars.png'

function ProductsCarousel() {
  const [products, setProducts] = useState([]);
  const [isHover, setIsHover] = useState(null);
  
  const {
    cart, setCart
  } = useContext(Context);

  const carousel = useRef(null);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));

      const localCart = JSON.parse(localStorage.getItem('cart'));
      // console.log(localCart);
      // console.log(cart);

      if (!localCart || localCart.length === 0) {
        localStorage.setItem('cart', JSON.stringify([]))
      }

  },[]);

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleHover = (e) => {
    setIsHover(editIndex => editIndex === e ? null : e)
  }

  const handleHoverOut = () => {
    setIsHover(false)
  }

  const handleComprarClick = async () => {

    await setCart([...cart, isHover]);
    
    localStorage.setItem('cart', JSON.stringify([...cart, isHover]))

  }


  if (!products || !products.length) {
    return null;
  }

  return (   
    <div className="container" style={{width: 1020}}>
      <h4>Mais Vendidos</h4>
      <hr />
      <div className='d-flex mt-4'>
        <button style={{width: 50}} onClick={handleLeftClick} className='btn btn-outline-light'>
          <img src={setaesquerda} alt="Scroll left" />
        </button>
        <div className='carousel' ref={carousel}>
          {products.map(({id, title, price, oldPrice, parcels, images}) =>
            <div className='item' key={id} onMouseOver={()=> handleHover(id)}
            onMouseOut={handleHoverOut}>
              <div className="image">
                <img
                  className=''
                  src={images[0]}
                  alt={title}
                  />
                <div
                  className='info d-flex flex-column align-items-center'
                >
                  <span className='name'>{title}</span>
                  <img className='w-75' src={stars} alt="" style={{height: '15%', marginTop: -5,  textDecoration: 'lineThrough'}}/>
                  <span className='oldPrice'>{` de R$ ${price*1.77}`}</span>
                  <span className='price'>{`por R$ ${price}`}</span>
                  {parcels && <span className='oldPrice'>{`ou em ${parcels} x ${(oldPrice/parcels).toFixed(2)}`}</span>}
                  {isHover === id &&
                    <button
                      className='btn btn-dark btn-sm'
                      onClick={handleComprarClick}
                    >
                      Comprar
                    </button>
                    }
                </div>
              </div>
            </div>
            )}
        </div> 
        <button style={{width: 50}} onClick={handleRightClick} className='btn btn-outline-light'>
          <img src={setadireita} alt="Scroll right" />
        </button>
      </div>
    </div>
  );
}

export default ProductsCarousel;