import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos () {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor ="#EB9B00"
            tamanhoFonte ="18px"
            alinhamento ="center"
            > Ultimos Lançamentos </Titulo>
            <NovosLivrosContainer>
            {livros.map ( livro => (
                <img src = {livro.src} />
            ) ) }
            </NovosLivrosContainer>
            <CardRecomenda
            titulo = 'Pegando a manha do React'
            subtitulo= 'Aprenda a usar o React'
            descricao= 'Aprenda a usar o React, uma biblioteca muito popular no mercado'
            img={imagemLivro}
            />
           
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos