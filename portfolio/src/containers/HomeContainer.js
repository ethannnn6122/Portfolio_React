import React from "react";
import { Paragraph, Box, PageHeader, Image } from "grommet";
import NavBar from "../components/NavBar";
import FooterComp from "../components/FooterComp";
import useWindowSize from "../useWindowSize";
import CardsComp from "../components/CardsComp";

const HomeContainer = () => {
    const { width } = useWindowSize();
    
    // Cards component variables
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
    let cardsBackground = "#46A7E0"
    let cardsColor = "#4E5A61";

    if (width < 1200 ) {
        propStyles = {
            flex: 1,
            background: cardsBackground,
            margin: "2em 0px 1em 1em",
            width: "15em"
        }
    } if (width < 700) {
        propStyles = {
            flex: 1,
            background: cardsBackground,
            margin: "2em 0px 1em 1em",
            width: "15em"
        }
    } else {
        propStyles = {
            flex: 1,
            background: cardsBackground,
            margin: "2em 0px 1em 1em",
            width: "40em"        
        }
    }

    let cardStyles = {
        color: cardsColor,
        display: "flex",
        alignItems: "center"
    }

    if (width < 1200) {
        cardStyles = {
            color: cardsColor,
            display: "flex",
            alignItems: "center",
            height: "60em"
        }
    } if (width < 770) {
        cardStyles = {
            color: cardsColor,
            display: "flex",
            alignItems: "center"
        }
    }

    const boxStyles = {
        color: "#4E615C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const background = {
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '15em',
        backgroundImage: "url(/images/Humphreys_NEW.jpg)",
        alignItems: "center"
    }
    
    return (
        <div>
            <NavBar width={width}/>
            <Box style={boxStyles}>
                <Box style={{height: "15em", ...background}}>
                    {width > 768 ? <PageHeader style={{ textShadow: "-1px -1px 0 #46A7E0, 1px -1px 0 #46A7E0, -1px 1px 0 #46A7E0, 1px 1px 0 #46A7E0",
                    color: "#4E5A61", marginTop: "1.5em"}}
                        title="Student, Developer, & Designer"
                        subtitle="Freelance Web Development and Student"
                    /> : <PageHeader style={{ textShadow: "-1px -1px 0 #46A7E0, 1px -1px 0 #46A7E0, -1px 1px 0 #46A7E0, 1px 1px 0 #46A7E0",
                    color: "#4E5A61", fontSize: "1em", margin: "1em 0 0 2em"}}
                        title="Student, Developer, & Designer"
                        subtitle="Freelance Web Development and Student"
                    /> }
                </Box>
                <Box style={{...boxStyles, backgroundColor: "#4E615C", width: "100%"}}>
                    { width > 770 ? <Box style={{background: "#46A7E0", width: "100%", display: "flex",
                                         flexFlow: "wrap", padding: "1.5em"}}>
                        <Box style={{order: "1", width: "10em", margin: "0 5% 0 5%"}}>
                            <Image fit="cover" style={{borderTopLeftRadius: "50% 50%", borderTopRightRadius: "50% 50%",
                                               borderBottomLeftRadius:"50% 50%", borderBottomRightRadius: "50% 50%",
                                               border: ".3em solid #4E615C"}}
                                               src={process.env.PUBLIC_URL + "/images/EthanProfile.jpg"}/>
                        </Box>
                        <Box style={{order: "2", width: "50%", alignItems: "center"}}>
                            <Paragraph style={{fontSize: "1.25em"}}>
                                    Hello, My name is Ethan Gruenemeier. I am currently a University student in my final year at Northern
                                    Arizona University. I enjoy frontend web development and am currently expanding my knowledge of backend 
                                    development.
                            </Paragraph>
                        </Box>
                    </Box> : <Box style={{background: "#46E0B5", width: "100%", display: "flex",
                                        padding: "1.5em", alignItems: "center"}}>
                        <Box style={{order: "1", width: "30%"}}>
                            <Image fit="cover" style={{borderTopLeftRadius: "50% 50%", borderTopRightRadius: "50% 50%",
                                               borderBottomLeftRadius:"50% 50%", borderBottomRightRadius: "50% 50%",
                                               border: ".3em solid #4E615C"}}
                                               src={process.env.PUBLIC_URL + "/images/EthanProfile.jpg"}/>
                        </Box>
                        <Box style={{order: "2"}}>
                            <Paragraph style={{fontSize: "1.25em"}}>
                                    Hello, My name is Ethan Gruenemeier. I am currently a University student in my final year at Northern
                                    Arizona University. I enjoy frontend web development and am currently expanding my knowledge of backend 
                                    development.
                            </Paragraph>
                        </Box>
                    </Box> }
                    {width > 770 ? <Box height="medium" width="large">
                        <Image fit="cover" style={{marginTop: "2em", borderRadius: "2em"}}
                        src={process.env.PUBLIC_URL + "/images/techClipArt.png"}/>
                    </Box> : <Box style={{width: "20em"}} height="medium" width="large">
                        <Image fit="cover" style={{marginTop: "1em", borderRadius: "2em"}}
                        src={process.env.PUBLIC_URL + "/images/techClipArt.png"}/>
                    </Box>}
                    <Box style={cardStyles}>
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
                </Box>
            </Box>
            <FooterComp/>
        </div>
    );
}

export default HomeContainer;