import React from "react";
import { Box, Collapsible, Nav, Sidebar, Button, Header} from "grommet";
import { Menu, Help, Projects, FormClose, Home, Linkedin, Github} from "grommet-icons";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    const header ={
        backgroundColor: "#4A1B8C",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    }
    const boxStyle = {
        backgroundColor: "#5E308C"
    }
    const sideBar = {
        display: "flex",
        flexDirection: "row"
    }
    const btn = {
        display: "flex",
        color: "#D9AB9A",
        marginLeft: "2em",
        alignItems: "center",
        justifyContent: "center"
    }

    return(
        <Box>  
            <Header style={header} align="start" background="brand">
                {open ? <Button icon={<FormClose color="#F2C49B"/>} onClick={() => setOpen(!open)}/> 
                                : <Button icon={<Menu color="#D9AB9A"/>} onClick={() => setOpen(!open)}/>}
                <Button icon={<Linkedin color="#F2C49B"/>} />
                <Button icon={<Github color="#F2C49B"/>} />
            </Header>
            <Collapsible open={open}>
                <Box>
                    <Sidebar style={boxStyle}>
                        <Nav style={sideBar} gap="medium">
                            <Button style={btn} icon={<Home color="#F2C49B" />} hoverIndicator label="Home" />
                            <Button style={btn} icon={<Projects color="#F2C49B" />} hoverIndicator label="Projects"/>
                            <Button style={btn} icon={<Linkedin color="#F2C49B" />} hoverIndicator label="Skills" />
                            <Button style={btn} icon={<Github color="#F2C49B"/>} hoverIndicator label="Contact Me" />
                            <Button style={btn} icon={<Help color="#F2C49B"/>} hoverIndicator label="About" />
                        </Nav>
                    </Sidebar>
                </Box>
            </Collapsible>
        </Box>
    );
}

export default NavBar;