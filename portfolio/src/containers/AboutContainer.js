import React from "react";
import NavBar from "../components/NavBar";
import FooterComp from "../components/FooterComp";
import { Box } from "grommet";

const ProjectContainer = () => {
    return(
        <Box>
            <NavBar/>
            <h1>About TODO</h1>
            <FooterComp/>
        </Box>
    );
}

export default ProjectContainer;