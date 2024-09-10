import React from "react";
import { Link } from "react-router-dom";
import { Box, Collapsible, Nav, Sidebar, Button, Header} from "grommet";
import { Menu, Help, Projects, FormClose, Home, Linkedin, Github, Contact, Info} from "grommet-icons";

const NavBar = ({width}) => {
    const [open, setOpen] = React.useState(false);
    let iconColor = "#4E5A61";
    const header ={
        backgroundColor: "#61564E",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    }
    const linkStyles = {
        backgroundColor: "#61564E",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    }

    const boxStyle = {
        backgroundColor: "#46E0B5"
    }

    let btn = {
        display: "flex",
        color: "#4E5A61",
        marginLeft: "2em",
        alignItems: "center"
    }

    return(
        <Box>  
            <Header style={{ backgroundColor: "#61564E", display: "flex", flexDirection: "row"}} align="start" background="brand">
                <div style={header}>
                    {open ? <Button icon={<FormClose color="#46A7E0"/>} onClick={() => setOpen(!open)}/> 
                    : <Button icon={<Menu color="#46E0B5"/>} onClick={() => setOpen(!open)}/>}
                </div>
                <div style={linkStyles}>
                    <Link to="https://www.linkedin.com/in/ethan-gruenemeier">
                        <Button style={{margin: "0em 1em 0 0"}} icon={<Linkedin color="#46E0B5"/>} />
                    </Link>
                    <Link to="https://github.com/ethannnn6122">
                        <Button style={{margin: "0em 1em 0 0"}} icon={<Github color="#46E0B5"/>} />
                    </Link>
                </div>
            </Header>
            <Collapsible open={open}>
                <Box>
                    <Sidebar style={boxStyle}>
                        { width < 920 ? <Nav style={{flexDirection: "column"}} gap="medium">
                            <Link style={{ textDecoration: "none" }} to="/">
                                <Button style={btn} icon={<Home color={iconColor} />} hoverIndicator="false" label="Home" />
                            </Link>  
                            <Link style={{ textDecoration: "none" }} to="/projects">
                                <Button style={btn} icon={<Projects color={iconColor} />} label="Projects"/>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/skills">
                                <Button style={btn} icon={<Info color={iconColor} />} label="Skills" />
                            </Link> 
                            <Link style={{ textDecoration: "none" }} to="/contact">
                                <Button style={btn} icon={<Contact color={iconColor}/>} label="Contact Me" />
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/about">
                                <Button style={btn} icon={<Help color={iconColor}/>} label="About" />
                            </Link>
                        </Nav> : <Nav style={{flexDirection: "row"}} gap="medium">
                            <Link style={{ textDecoration: "none" }} to="/">
                                <Button style={btn} icon={<Home color={iconColor} />} label="Home" />
                            </Link>  
                            <Link style={{ textDecoration: "none" }} to="/projects">
                                <Button style={btn} icon={<Projects color={iconColor} />} label="Projects"/>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/skills">
                                <Button style={btn} icon={<Info color={iconColor} />} label="Skills" />
                            </Link> 
                            <Link style={{ textDecoration: "none" }} to="/contact">
                                <Button style={btn} icon={<Contact color={iconColor}/>} label="Contact Me" />
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/about">
                                <Button style={btn} icon={<Help color={iconColor}/>} label="About" />
                            </Link>
                        </Nav>}
                    </Sidebar>
                </Box>
            </Collapsible>
        </Box>
    );
}

export default NavBar;