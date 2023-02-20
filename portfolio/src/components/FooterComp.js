import React from "react";
import {Footer, Text, Anchor} from "grommet";


const FooterComp = () => {
    return(
        <Footer style={{marginTop: "2em"}} background="#4A1B8C" pad="small">
            <Text>Mile High Coding 2023</Text>
            <Anchor label="About" />
        </Footer>
    );
}

export default FooterComp;