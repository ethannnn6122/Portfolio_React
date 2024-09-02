import React from "react";
import NavBar from "../components/NavBar";
import FooterComp from "../components/FooterComp";
import CardsComp from "../components/CardsComp";
import useWindowSize from "../useWindowSize";
import { Box, PageHeader } from "grommet";

const ProjectContainer = () => {
    const { width } = useWindowSize();
    let propStyles = {};
    let cardTitleOne = "Wedding Website";
    let cardTitleTwo = "Raspberry Pi Projects";
    let cardTitleThree = "Web Scraper Project";
    
    const boxStyle = {
        display: "flex",
        flexDirection: "row",
        padding: "2em",
        margin: "1em",
        backgroundColor: "rgba(68, 161, 242, 0.7)",
        borderRadius: "2em"
    }

    const cardStyles = {
        color: "#D9C091",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    if (width < 1200 ) {
        propStyles = {
            flex: 1,
            background: "#327AD9",
            margin: "2em 0 1em 2em",
            width: "30em"
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

    return(
        <Box>
            <NavBar/>
            <Box style={boxStyle}>
                <PageHeader title="Projects" subtitle="Projects I have worked on."/>
            </Box>
            <Box style={cardStyles}>
                <CardsComp width={width}
                    cardTitleOne={cardTitleOne}
                    cardOne={"One"}
                    cardTitleTwo={cardTitleTwo}
                    cardTwo={"Two"}
                    cardTitleThree={cardTitleThree}
                    cardThree={"Three"}
                    styles={{propStyles}}
                />
            </Box>
            <FooterComp/>
        </Box>
    );
}

export default ProjectContainer;