import React from "react";
import {  Box, PageHeader } from "grommet";
import NavBar from "../components/NavBar";

const HomeContainer = () => {
    
    const styles = {
        marginLeft: "auto",
        marginRight: "auto",
        padding: "2em",
        width: "65em",
        backgroundColor: "#74FCDA",
    }
    
    return (
        <Box >
            <NavBar/>
            <PageHeader
                style={styles}
                title="Portfolio of Ethan Gruenemeier"
                subtitle="A history of work that might be interesting"
            />
        </Box>
    );
}

export default HomeContainer;