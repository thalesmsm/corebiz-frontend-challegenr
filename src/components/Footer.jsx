import vtex from '../images/vtex.png'
import corebiz from '../images/corebiz.png'

function Footer() {
  return ( 
    <footer className="d-flex justify-content-center text-white p-3" style={{backgroundColor: "black"}}>
      <div className="d-flex justify-content-between" style={{width: 1020}}>
        <div className="fs-6">
          <h5>Localização</h5>
          <hr className="border border-2 "style={{width: 50 }}/>
          <p style={{fontSize: 12, margin: 0}}>Avenida Andrômeda, 200. Bloco 6 e 8</p>
          <p style={{fontSize: 12, margin: 0}}>Alphaville, SP</p>
          <p style={{fontSize: 12, margin: 0}}>brasil@corebiz.ag</p>
          <p style={{fontSize: 12, margin: 0}}>+55 11 2090 1039</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-around">
          <button className="btn btn-light w-75 h-25 d-flex align-items-center justify-content-between">
            <span className="material-symbols-outlined">
              mail
            </span>
            <span className="text-wrap" style={{fontSize: 10}}>ENTRE EM CONTATO</span>
          </button>
          <button className="btn btn-light w-75 h-25 d-flex align-items-center justify-content-around">
            <span className="material-symbols-outlined">
              headset_mic
            </span>
            <span className="text-wrap" style={{fontSize: 10}}>FALE COM NOSSO CONSULTOR ONLINE</span>
            </button>
        </div>
        <div className="d-flex align-items-center justify-content-around">
          <img src={corebiz} style={{marginRight: 0, width: 80}} />
          <img src={vtex} style={{width: 60}}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;