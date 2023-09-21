import './Main.css'
import Projeto from "../projeto/Projeto"
import { useState } from 'react';

type ProjetoType = {
    id: number,
    titulo:string,
    reviw:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")


    const projeto:ProjetoType[] = [
        {
            id:1,
            titulo:"Red Dead Redemption 2",
            reviw:"baguncinha nos EUA com direito a grau de cavalo, tiroteio e muita ação",
            imagem:"/red.jpeg"
        },
        {
            id:2,
            titulo:"Monlighter",
            reviw:"Jogo de vender itens que são provenientes de *lotear inimigos* que se resume a latrocineo ",
            imagem:"/moon.jpeg"
        },
        {
            id:3,
            titulo:"The Evil Whitin",
            reviw:"ran dan dan dan dan vulgo *medo genuino*",
            imagem:"/evil.jpeg"
        }


    ]
    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
           <div className='Myname'>
          </div>
            <div className="pesquisa">
               
                <p>Buscar Projeto</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
                </div>
            </div>






           






            <main className="content-main">
                {projeto.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto:ProjetoType)=>
                    <Projeto key={projeto.id}
                           titulo={projeto.titulo}
                           reviw={projeto.reviw}
                           imagem={projeto.imagem}
                    />
                    )
                }


               
            </main>
        </>
    )
}
