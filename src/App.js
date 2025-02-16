import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa  from './componentes/Pesquisa';
import UltinmsLancamentos from './componentes/UltimosLancamentos'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #ff0000 35%, #2d302d);
  
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltinmsLancamentos />
    </AppContainer>
  );
}

export default App;