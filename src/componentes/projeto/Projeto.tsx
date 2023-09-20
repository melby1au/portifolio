import './Projeto.css'


type ProjetoProps={
    titulo:string,
    reviw:string,
    imagem:string
}


export default function Projeto(props:ProjetoProps){
    return(
        <div className="projeto_content">
            <div className="foto_projeto">
                <img src={props.imagem} alt=""/>
            </div>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <p className="reviw">
                    {props.reviw}
                </p>
            </div>
        </div>
        
    )
}


