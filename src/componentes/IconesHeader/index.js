import './estilo.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <div className='icones-header'>
            <ul className='icones'>
            { icones.map((icone) => (
                <li className='icone'><img src={icone}></img></li>
            )) }
            </ul>
        </div>
    );
}

export default IconesHeader;