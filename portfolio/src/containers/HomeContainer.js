import React from "react";
import { Paragraph, Box, PageHeader, Image } from "grommet";
import NavBar from "../components/NavBar";
import FooterComp from "../components/FooterComp";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import useWindowSize from "../useWindowSize";
import CardsComp from "../components/CardsComp";

const HomeContainer = () => {
    const { width } = useWindowSize();
    let cardOne = "I have been designing websites since I was 16 years old and started my journey into design, " +
    "at a secondary institution called West-MEC. I have been dedicating time to learning design" +
    " fundamentals. I have been learning the React framework and am available for freelance design work.";
    let cardTwo = "I have been programming since I was twelve years old, starting with MIT App Inventor. I created a few apps that " +
    "I released on the Google Play Store. Ever since, I have been taking courses on various programming languages " +
    "including: C/++, Java, Python, JavaScript, CSS, HTML5, and PHP.";
    let cardThree = "I have been studying at Northern Arizona University since 2020, starting out as a computer scientist major. " +
    "I then changed majors to cybersecurity because I felt the immense importance of security in the tech world. " + 
    "While continuing my studies I have been working for Flexential as a Data Operations Technician.";
    let propStyles = {};
    let cardFlexPos = "row";
    let cardTitleOne = "Design";
    let cardTitleTwo = "Programming";
    let cardTitleThree = "Experience";

    if (width < 1200 ) {
        propStyles = {
            flex: 1,
            background: "#327AD9",
            margin: "2em 0 1em 2em",
            width: "15em"
        }
    } if (width < 700) {
        propStyles = {
            flex: 1,
            background: "#327AD9",
            margin: "2em 0 1em 2em",
            width: "15em"
        }
    } else {
        propStyles = {
            flex: 1,
            background: "#327AD9",
            margin: "2em 0 1em 2em",
            width: "50em"
        }
    }

    const boxStyles = {
        color: "#D9C091",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const imgStyles = {
        margin: "2em 0 2em 0"
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
        <div style={background}>
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={0.5}>  
                    <NavBar width={width}/>
                    <Box style={boxStyles}>
                        {width > 768 ? <PageHeader style={{color: "#020659"}}
                            title="Student, Developer, & Designer"
                            subtitle="I love designing and building cool websites."
                        /> : <PageHeader style={{color: "#020659", fontSize: "1em", margin: "1em 0 0 2em"}}
                        title="Student, Developer, & Designer"
                        subtitle="I love designing and building cool websites."
                        /> }
                        <Box style={imgStyles} height="small" width="small">
                            <Image fit="cover" style={{borderRadius: "2em"}}
                                src={process.env.PUBLIC_URL + "/images/EthanProfile.jpg"}/>
                        </Box>
                        { width > 760 ? <Box style={{background: "#327AD9", width: "100%", height: "12em", display: "flex", alignItems: "center",
                                justifyContent: "center"}}>
                            <Paragraph style={{fontSize: "1.25em"}}>
                                    Hello, My name is Ethan Gruenemeier. I am currently a University student in my third year at Northern
                                    Arizona University. I enjoy frontend web development and am currently expanding my knowledge of backend 
                                    development.
                            </Paragraph>
                        </Box> : <Box style={{background: "#327AD9", width: "100%", height: "10em", display: "flex", alignItems: "center",
                                justifyContent: "center", fontSize: "1em", margin: "1em 0 0 0"}}>
                            <Paragraph style={{fontSize: "1em", margin: "0 1em 0 1em"}}>
                                    Hello, My name is Ethan Gruenemeier. I am currently a University student in my third year at Northern
                                    Arizona University. I enjoy frontend web development and am currently expanding my knowledge of backend 
                                    development.
                            </Paragraph>
                        </Box>}
                        {width > 760 ? <Box style={imgStyles} height="medium" width="large">
                            <Image fit="cover" style={{borderRadius: "2em"}}
                            src={process.env.PUBLIC_URL + "/images/techClipArt.png"}/>
                        </Box> : <Box style={{width: "20em"}} height="medium" width="large">
                            <Image fit="cover" style={{borderRadius: "2em"}}
                            src={process.env.PUBLIC_URL + "/images/techClipArt.png"}/>
                        </Box>}
                        
                    </Box>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} >
                    <Box style={boxStyles}>
                        <CardsComp width={width}
                            cardTitleOne={cardTitleOne}
                            cardOne={cardOne}
                            cardTitleTwo={cardTitleTwo}
                            cardTwo={cardTwo}
                            cardTitleThree={cardTitleThree}
                            cardThree={cardThree}
                            cardFlexPos={cardFlexPos}
                            styles={{propStyles}}/>
                    </Box>
                </ParallaxLayer>
            </Parallax>
            <FooterComp/>
        </div>
    );
}

export default HomeContainer;