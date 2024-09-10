import { Grommet } from 'grommet';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';
import ProjectContainer from './containers/ProjectContainer';
import SkillContainer from './containers/SkillContainer';
import AboutContainer from './containers/AboutContainer';


const theme = {
  global: {
    font: {
      family: "Josefin Sans",
      size: "1.2em"
    },
    colors: {
      control: "#46A7E0"
    }
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
    },
    {
      path: "/projects",
      element: <ProjectContainer/>
    },
    {
      path: "/skills",
      element: <SkillContainer/>
    },
    {
      path: "/about",
      element: <AboutContainer/>
    }
  ]);

  return (
    <Grommet theme={theme} full>
      <RouterProvider router={router}/>
    </Grommet> 
    
  );
}

export default App;
