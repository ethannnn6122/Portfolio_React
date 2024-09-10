import React from "react";
import {Footer, Text} from "grommet";
import { Link } from "react-router-dom";


const FooterComp = () => {
    const footerStyle = {
        marginTop: "1em",
        position: "fixed",
        width: "100%",
        bottom: "0"
    }
    return(
        <Footer style={footerStyle} background="#61564E" pad="small">
            <Text style={{color: "#46E0B5"}}>Mile High Coding 2024</Text>
            <Link style={{textDecoration: "none", color: "#46E0B5"}} to="/about">
                About
            </Link>
        </Footer>
    );
}

export default FooterComp;