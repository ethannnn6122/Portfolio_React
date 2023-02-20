import React from "react";
import { Paragraph ,Box, PageHeader, Image } from "grommet";
import NavBar from "../components/NavBar";
import IntroductionComp from "../components/IntroductionComp";

const HomeContainer = () => {
    
    const styles = {
        color: "#4A1B8C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const imgStyles = {
        marginBottom: "2em"
    }
    
    return (
        <Box>
            <NavBar/>
            <Box style={styles}>
                <PageHeader style={{color: "#4A1B8C"}}
                    title="Student, Developer, & Designer"
                    subtitle="I love designing and building cool websites."
                />
                <Box style={imgStyles} height="small" width="small">
                    <Image fit="cover" style={{borderRadius: "2em"}}
                        src={process.env.PUBLIC_URL + "/images/EthanClipArt.jpg"}/>
                </Box>
                <Box style={imgStyles} height="medium" width="large">
                    <Image fit="cover" style={{borderRadius: "2em"}}
                        src={process.env.PUBLIC_URL + "/images/techClipArt.png"}/>
                </Box>
                <Box style={{background: "#A676A3", width: "100%", height: "15em", display: "flex", alignItems: "center",
                            justifyContent: "center"}}>
                    <Paragraph style={{}}>
                            Hello, My name is Ethan Gruenemeier. I am currently a University student in my third year at Northern
                            Arizona University. I enjoy frontend web development and am currently expanding my knowledge of backend 
                            develpment.
                    </Paragraph>
                </Box>
            </Box>
            <IntroductionComp />
        </Box>
    );
}

export default HomeContainer;