import React from "react";
import { Paragraph ,Box, PageHeader, Image } from "grommet";
import NavBar from "../components/NavBar";
import IntroductionComp from "../components/IntroductionComp";
import FooterComp from "../components/FooterComp";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
        <div>
            <Parallax pages={2} style={{background: "linear-gradient(#D9AB9A, #4A1B8C)"}}>
                <ParallaxLayer offset={0} speed={0.5}>
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
                    </Box>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1.5} >
                    <Box style={styles}>
                        <Box style={{background: "#A676A3", width: "100%", height: "15em", display: "flex", alignItems: "center",
                                justifyContent: "center"}}>
                            <Paragraph style={{fontSize: "1.25em"}}>
                                    Hello, My name is Ethan Gruenemeier. I am currently a University student in my third year at Northern
                                    Arizona University. I enjoy frontend web development and am currently expanding my knowledge of backend 
                                    development.
                            </Paragraph>
                        </Box>
                    </Box>
                    <IntroductionComp/>
                </ParallaxLayer>
                <FooterComp/>
            </Parallax>
        </div>
    );
}

export default HomeContainer;