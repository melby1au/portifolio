import './Header.css'
import { Link } from "react-router-dom"
function Header(){
    return(
        <header>
      <div>
        <h1>Alexandre V. Souza</h1>
      </div>
      <nav>
        <ul>
            <li>
                
            </li>
            <li>
                <Link to ="/">inicio</Link>
            </li>
            <li>
                <Link to ="/jogos">jugos</Link>
            </li>
            <li>
                <Link to ="/perfil">perfil</Link>
            </li>
            <li>
                <Link to ="/contato">fale com eo</Link>
            </li>
        </ul>
      </nav>
        </header>
        
    )
}
export default Header
