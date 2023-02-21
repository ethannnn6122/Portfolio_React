import { Grommet } from 'grommet';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';

const theme = {
  global: {
    font: {
      family: "Josefin Sans",
      size: "1.2em"
    },

  },
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeContainer/> 
    },
    {
      path: "/contact",
      element: <ContactContainer/>
    }
  ]);

  return (
    <Grommet theme={theme} full>
      <RouterProvider router={router}/>
    </Grommet> 
    
  );
}

export default App;
