import React from "react";
import { Box, Collapsible, Nav, Sidebar, Button, Header} from "grommet";
import { Menu, Help, Projects, Clock, FormClose, Home } from "grommet-icons";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    const header ={
        backgroundColor: "#4A1B8C",
        display: "flex",
        flexDirection: "row"
    }
    const boxStyle = {
        backgroundColor: "#5E308C"
    }
    const sideBar = {
        display: "flex",
        flexDirection: "row"
    }
    const btn = {
        flex: 1,
        color: "#D9AB9A"
    }

    return(
        <Box>  
            <Header style={header} align="start" background="brand">
                {open ? <Button icon={<FormClose color="#F2C49B"/>} onClick={() => setOpen(!open)}/> 
                                : <Button icon={<Menu color="#D9AB9A"/>} onClick={() => setOpen(!open)}/>}
                <Button style={btn} icon={<Home color="#F2C49B"/>} /> 
            </Header>
            <Collapsible open={open}>
                <Box>
                    <Sidebar style={boxStyle}>
                        <Nav style={sideBar} gap="medium">
                            <Button style={btn} icon={<Projects color="#F2C49B" />} hoverIndicator label="test" />
                            <Button style={btn} icon={<Clock color="#F2C49B" />} hoverIndicator />
                            <Button style={btn} icon={<Projects color="#F2C49B" />} hoverIndicator />
                            <Button style={btn} icon={<Clock color="#F2C49B"/>} hoverIndicator />
                            <Button style={btn} icon={<Help color="#F2C49B"/>} hoverIndicator />
                        </Nav>
                    </Sidebar>
                </Box>
            </Collapsible>
        </Box>
    );
}

export default NavBar;