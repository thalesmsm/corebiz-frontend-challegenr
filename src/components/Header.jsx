import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";

function Header() {
  const {
    cart, setCart
  } = useContext(Context);

  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem('cart'));
    setCart(localCart)
  },[])

  const myStyle = {
    borderRadius: '50%',
    backgroundColor: '#F8475F',
    fontSize:10,
    width: 14,
    height: 14,
    color: 'white',
    textAlign: 'center',
  }
  return(
    <header className="container-sm d-flex justify-content-between align-items-center p-2" style={{width: 1020}}>
      <img src="https://blog.corebiz.ag/wp-content/uploads/2022/05/A01.png" alt="COREBIZ." style={{width: 120}}/>
      <div className="d-flex justify-content-center" style={{width: 600, margin: 'auto'}}>
        <input type="search" placeholder="O que está procurando" className="border border-0 border-bottom border border-2 border-secondary" style={{width: 500}}/>
        <button className="border border-0 border-bottom bg-body border border-2 border-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="crayons-icon c-btn__icon" focusable="false"><path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></svg>
        </button>
      </div>
      
      <nav className="d-flex justify-content-between align-items-center " style={{width: 170}}>
        <a href="#" className="d-flex justify-content-between align-items-center text-decoration-none text-reset">
          <span className="material-symbols-outlined">
            person
          </span>
          <span className="mx-2">Minha Conta</span>
        </a>
        <a href="#" className="d-flex justify-content-between align-items-center text-decoration-none text-reset">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </a>
        {cart.length > 0 && <span style={myStyle}>{cart.length}</span>}
        
      </nav>
    </header>
  )
};

export default Header;