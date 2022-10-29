import { useState } from "react";
import '../App.css'

function News() {
  const back = '#F2F2F2';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [validateName, setValidateName] = useState();
  const [validateEmail, setValidateEmail] = useState();

  const regexEmail = /\S+@\S+\.\S+/;
  const regexName = /[A-Z][a-z]* [A-Z][a-z]*/

  const handleChangeName = ({ target: {value} }) => {
    setName(value);
  }

  const handleChangeEmail = ({ target: {value} }) => {
    setEmail(value)
  }

  const handleClick = () => {
    {regexName.test(name) ? setValidateName(true) : setValidateName(false)}
    {regexEmail.test(email) ? setValidateEmail(true) : setValidateEmail(false)}
  }

  const handleClickNew = () => {
    setValidateName(null)
    setValidateEmail(null)
    setName('')
    setEmail('')
  }

  return ( 
    <div className="mt-5 p-4" style={{backgroundColor: back}}>
      {validateEmail && validateName ? 
      <div className="d-flex flex-column align-items-center justify-content-center w-25" style={{margin: 'auto'}}>
        <h4 style={{fontSize: 14, fontWeight: "bold"}}>Seu e-mail foi cadastrado com sucesso!</h4> 
        <h4 style={{fontSize: 13, fontWeight: "lighter"}}>A partir de agora receberá as novidades e ofertas exclusivas</h4>
        <button
          className="w-100 btn btn-dark"
          onClick={handleClickNew}
        >
          Cadastrar novo e-mail
        </button>
      </div>
      : 
        <div>
          <h3 className="text-center fs-6">Participe de nossa news com promoções e novidades</h3>
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="text"
              placeholder="Digite seu nome"
              className={`me-2 p-2 border ${validateName === false ? 'border-danger' : 'border-0' }`}
              onChange={handleChangeName}
              />
            <input
              type="email"
              placeholder="Digite se email"
              className={`me-2 p-2 border ${validateEmail === false ? 'border-danger' : 'border-0' }`}
              onChange={handleChangeEmail}
              />
            <button
              className="btn btn-dark"
              onClick={handleClick}
              >
              Eu quero!
            </button>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            {validateName === false && <p className='me-2 text-danger' style={{fontSize: 10, width: 264, position:'absolute', left:392,top:800}}>Preencha com seu nome completo</p> }
            {validateEmail === false && <p className='me-2 text-danger' style={{fontSize: 10, width: 264, position:'absolute', left:665, top:800}}>Preencha com um e-mail valido</p> }
            <div style={{fontSize: 10, width: 95}}></div>
          </div>
        </div>
      }
      
    </div>

  );
}

export default News;