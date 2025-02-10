import './estilo.css'

const textoOpcoes = ['CATEGORIAS', 'MEUS LIVROS', 'FAVORITOS'];

function OpcoesHeader() {
    return (
        <div className='opcoes-header'>
        <ul className='opcoes'>
          {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>
        </div>
    );
}

export default OpcoesHeader;