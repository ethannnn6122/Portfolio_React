import React from "react";
import { Avatar, Box, Collapsible, Nav, Sidebar, Button, Header} from "grommet";
import { Menu, Help, Projects, Clock, FormClose, Home } from "grommet-icons";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    return(
        <Box>  
            <Header align="start" background="brand">
                {open ? <Button icon={<FormClose/>} onClick={() => setOpen(!open)}/> 
                                : <Button icon={<Menu/>} onClick={() => setOpen(!open)}/>}
                {/* <Text>HOME</Text> */}
                <Button icon={<Home />} /> 
            </Header>
            <Collapsible direction="horizontal" open={open}>
                <Box
                    
                    direction="row"
                    pad="small"
                >
                    <Sidebar elevation="large" background="brand" round="small"
                        header= {
                            <Avatar src={process.env.PUBLIC_URL + "/images/PlaceHolder.jpg"} />
                        }
                        footer={
                            <Button icon={<Help />} hoverIndicator />
                        }>

                        <Nav gap="medium">
                            <Button icon={<Projects />} hoverIndicator />
                            <Button icon={<Clock />} hoverIndicator />
                        </Nav>
                    </Sidebar>
                </Box>
            </Collapsible>
        </Box>
    );
}

export default NavBar;