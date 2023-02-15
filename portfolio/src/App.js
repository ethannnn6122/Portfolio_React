import { Grommet } from 'grommet';
import HomeContainer from './containers/HomeContainer';

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <HomeContainer/>
    </Grommet>
  );
}

export default App;
