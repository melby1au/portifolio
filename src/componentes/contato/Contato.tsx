import "./Contato.css"
import { useState } from 'react';
//import { Link } from 'react-router-dom'
function Contato() {

  function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setEmail(e.target.value)

}
function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
  console.log(e.target.value)
  setNome(e.target.value)

}
function mudaMensagem(e:React.ChangeEvent<HTMLTextAreaElement>){
  console.log(e.target.value)
  setMensagem(e.target.value)

}
const [email,setEmail] = useState("")
const [nome,setNome] = useState("")
const [mensagem,setMensagem] = useState("")

    return (
      <main className="contato">

        <div className="contatos-container">
          <h2>Entre em Contato</h2>
          <p>Envie-nos uma mensagem</p>
          <form className="contatos-form">

            <div className="form-group">
              <p>O nome enserido é:{nome}</p>
              <input type="text" id="nome" name="nome" placeholder="Seu nome" onChange={mudaNome}/>
            </div>
            <div className="form-group">
              <p>email :{email}</p>
              <input type="email" id="email" name="email" placeholder="Seu email" onChange={mudaEmail} />
            </div>
            <div className="form-group">
              <p>seu texto é:{mensagem}</p>
              <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" onChange={mudaMensagem}> </textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
    );
  }
  export default Contato


