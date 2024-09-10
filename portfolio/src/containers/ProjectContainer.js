import React from "react";
import NavBar from "../components/NavBar";
import FooterComp from "../components/FooterComp";
import CardsComp from "../components/CardsComp";
import useWindowSize from "../useWindowSize";
import { Box, Carousel, Image, PageHeader } from "grommet";

const ProjectContainer = () => {
    const { width } = useWindowSize();
   // Cards component variables
   let cardOne = `Cupidatat sunt laboris aute fugiat sunt in nisi amet cillum. Ullamco mollit exercitation ut in consectetur tempor non est anim ut sunt.
    Consequat laborum in mollit ut cupidatat elit ea proident dolore id laboris do labore. Ullamco cupidatat veniam veniam ex nisi occaecat ipsum minim voluptate dolore sunt amet do.
    Consectetur ut magna esse mollit consequat.`;
   let cardTwo = `In minim amet ut exercitation enim eu voluptate non. Qui est officia non sit minim magna aliquip qui. Dolore aliquip dolore consequat sint ex nisi ipsum enim id
   consequat incididunt. Ullamco occaecat ex ullamco magna reprehenderit cillum occaecat minim laborum nulla id. Consectetur aute elit tempor sunt excepteur id id id occaecat sunt
   sint excepteur ex. Elit Lorem consequat sint amet id proident pariatur non commodo consectetur laborum.`;
   let cardThree = `Dolore incididunt consectetur id elit ut pariatur ut enim in voluptate duis ea in. Non sunt quis in pariatur sit labore eiusmod consequat cupidatat.
   Nisi velit quis eu incididunt nostrud occaecat culpa pariatur. Anim deserunt adipisicing ex officia id esse quis mollit commodo qui veniam velit. Ad quis sint nostrud reprehenderit
   aliqua voluptate anim fugiat dolor do cupidatat deserunt.`;
   let propStyles = {};
   let cardFlexPos = "row";
   let cardTitleOne = "Wedding Website";
   let cardTitleTwo = "Sales Demo Website";
   let cardTitleThree = "Raspberry Pi Projects";
   let cardsBackground = "#46A7E0"
   let cardsColor = "#4E5A61";

   // Cards component variables   
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

    const backgroundStyle = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#4E615C",
    }

    return(
        <div>
            <NavBar width={width}/>
            <Box style={backgroundStyle}>
                <Box style={{flexDirection: "row", alignItems: "center", justifyContent: "left", paddingBottom: "6em"}}>
                    <PageHeader style={{ textShadow: "-1px -1px 0 #46A7E0, 1px -1px 0 #46A7E0, -1px 1px 0 #46A7E0, 1px 1px 0 #46A7E0",
                                color: "#4E5A61", padding: "1em 1em 1em 5em"}}
                                size="large"
                                title="Projects"
                                subtitle="Exciting Projects I have done" />
                    <Box style={{margin: "2em 1em 1em 25em", borderRadius: "2em"}} height="medium" width="large" overflow="hidden">
                        <Carousel fill>
                            <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
                        </Carousel>
                    </Box>
                </Box>
                <Box style={cardStyles}>
                    <CardsComp width={width}
                        cardOne={cardOne}
                        cardTitleOne={cardTitleOne}
                        cardTitleTwo={cardTitleTwo}
                        cardTwo={cardTwo}
                        cardTitleThree={cardTitleThree}
                        cardThree={cardThree}
                        cardFlexPos={cardFlexPos}
                        styles={{propStyles}}
                    />
                </Box>
                <FooterComp/>
            </Box>
        </div>
    );
}

export default ProjectContainer;