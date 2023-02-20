import { Grommet } from 'grommet';
import HomeContainer from './containers/HomeContainer';
import FooterComp from './components/FooterComp';

const theme = {
  global: {
    font: {
      family: "Josefin Sans",
      size: "18px"
    }
  },
};

function App() {
  return (
      <Grommet theme={theme} full>
        <HomeContainer/>
        <FooterComp/>
      </Grommet>
    
  );
}

export default App;
