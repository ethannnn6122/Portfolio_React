import React from "react";
import { Link } from "react-router-dom";
import { Box, Collapsible, Nav, Sidebar, Button, Header} from "grommet";
import { Menu, Help, Projects, FormClose, Home, Linkedin, Github, Contact} from "grommet-icons";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    const header ={
        backgroundColor: "#020659",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    }
    const boxStyle = {
        backgroundColor: "#1F4CA6"
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
        justifyContent: "center",
        borderColor: "#1F4CA6"
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
                            <Link style={{ textDecoration: "none" }} to="/">
                                <Button style={btn} icon={<Home color="#F2C49B" />} hoverIndicator label="Home" />
                            </Link>  
                            <Link style={{ textDecoration: "none" }} to="/projects">
                                <Button style={btn} icon={<Projects color="#F2C49B" />} hoverIndicator label="Projects"/>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/skills">
                                <Button style={btn} icon={<Linkedin color="#F2C49B" />} hoverIndicator label="Skills" />
                            </Link> 
                            <Link style={{ textDecoration: "none" }} to="/contact">
                                <Button style={btn} icon={<Contact color="#F2C49B"/>} hoverIndicator label="Contact Me" />
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/about">
                                <Button style={btn} icon={<Help color="#F2C49B"/>} hoverIndicator label="About" />
                            </Link>
                        </Nav>
                    </Sidebar>
                </Box>
            </Collapsible>
        </Box>
    );
}

export default NavBar;