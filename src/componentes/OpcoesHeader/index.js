import styled from 'styled-components';

const OpcoesContainer = styled.div`

.opcoes {
    display: flex;
}

.opcao{
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
}

`

const textoOpcoes = ['CATEGORIAS', 'MEUS LIVROS', 'FAVORITOS', 'PROMOÇÕES'];

function OpcoesHeader() {
    return (
        <OpcoesContainer>
        <ul className='opcoes'>
          {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>
        </OpcoesContainer>
    );
}

export default OpcoesHeader;