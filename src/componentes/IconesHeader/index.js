import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const IconesContainer = styled.div`

.icones{
    display: flex;
    align-items: center;
}

.icone{
    margin-right: 40px;
    width: 25px;
}

`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <IconesContainer>
            <ul className='icones'>
            { icones.map((icone) => (
                <li className='icone'><img src={icone}></img></li>
            )) }
            </ul>
        </IconesContainer>
    );
}

export default IconesHeader;