import { Grommet } from 'grommet';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';

const theme = {
  global: {
    font: {
      family: "Josefin Sans",
      size: "1.2em"
    },

  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeContainer/>}>
              <Route path="/projects" element={null}/>
              <Route path="/skills" element={null}/>
              <Route path="contact" element={null}/>
              <Route path="*" element={null}/>
            </Route>
          </Routes>
      </BrowserRouter>
   </Grommet> 
    
  );
}

export default App;
