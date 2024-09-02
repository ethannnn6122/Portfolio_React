import React from "react";
import {Footer, Text, Anchor} from "grommet";


const FooterComp = () => {
    const footerStyle = {
        marginTop: "2em",
        position: "fixed",
        width: "100%",
        bottom: "0"
    }
    return(
        <Footer style={footerStyle} background="#020659" pad="small">
            <Text>Mile High Coding 2024</Text>
            <Anchor label="About" />
            {/* <Text>By Bob Blasi; Coconino National Forest - San Francisco Peaks during winterUploaded by PDTillman, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=13386079</Text> */}
        </Footer>
    );
}

export default FooterComp;