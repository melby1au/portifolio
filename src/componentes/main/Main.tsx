import './Main.css'
import cbox from './cbox.jpg'
import red from './red.jpeg'
import moon from './moon.jpeg'
import evil from './evil.jpeg'
function Main(){
    return(
       <main>
        <div className='panela'>
            <div className='img'>
            <img src={cbox} alt="" className='img1'/>
            </div>
<div></div>

            <h3 className='miojo'> Os unicos xps que eu possuo na vida são em alguns jogos então farei uma breve review de alguns</h3>
            <div className='jugos'>
                <div> <img src={red} alt="" className='img1' /> <p className='jj'>jogo onde predomina o tiroteio, grau de cavalo e pew pew</p></div> 

                <div> <img src={moon} alt=""  className='img1' /> <p className='jj'> simulador de vendas fds</p> </div>

                <div> <img src={evil} alt=""  className='img1' /> <p className='jj'> *medo genuino*</p> </div> 

            </div>
        </div>
       </main>
    )

}
export default Main