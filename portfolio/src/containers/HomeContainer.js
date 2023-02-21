import React from "react";
import { Paragraph, Box, PageHeader, Image } from "grommet";
import NavBar from "../components/NavBar";
import IntroductionComp from "../components/IntroductionComp";
import FooterComp from "../components/FooterComp";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HomeContainer = () => {
    const styles = {
        color: "#D9C091",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const imgStyles = {
        marginBottom: "2em"
    }
    const background = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        backgroundImage: "url(/images/Humphreys.jpg)"
    }
    
    return (
        <div>
            <Parallax pages={2} style={background}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <NavBar/>
                    <Box style={styles}>
                        <PageHeader style={{color: "#020659"}}
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
                        <Box style={{background: "#327AD9", width: "100%", height: "12em", display: "flex", alignItems: "center",
                                justifyContent: "center"}}>
                            <Paragraph style={{fontSize: "1.25em"}}>
                                    Hello, My name is Ethan Gruenemeier. I am currently a University student in my third year at Northern
                                    Arizona University. I enjoy frontend web development and am currently expanding my knowledge of backend 
                                    development.
                            </Paragraph>
                        </Box>
                    </Box>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1.5} >
                    <Box style={styles}>
                        <IntroductionComp/>
                        <FooterComp/>
                    </Box>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default HomeContainer;