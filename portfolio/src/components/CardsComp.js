import React from "react";

import { Box, Card, CardHeader, CardBody, CardFooter, Button } from "grommet";
import { Brush, Book, Code, Test} from "grommet-icons";
import { Link } from "react-router-dom";

const CardsComp = (props) => {
    let iconColor = "#4E5A61";
    let boxStyles = {
        display: "flex",
        flexDirection: props.cardFlexPos,
        paddingBottom: "2em",
        margin: "1em 2em 1em 1em"
    };

    if (props.width < 1200 && props.width > 700 ) {
        boxStyles = {
            display: "flex", 
            flexDirection: "column"
        }
    } 
    if (props.width < 700) {
        boxStyles = {
            display: "flex",
            flexDirection: "column",
            margin: "1em 2em 1em 1em"
        }
    }

    return(
        <Box style={boxStyles}>
            <Card style={props.styles.propStyles} height="medium" width="medium">
                <CardHeader style={{backgroundColor: "#46E0B5"}} pad="small">
                    {props.cardTitleOne}
                    <Brush color={iconColor}/>
                </CardHeader>
                <CardBody pad="medium">
                    {props.cardOne}
                </CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">
                    <Link to="/projects">
                        <Button style={{margin: "1em 0 1em 0"}} icon={<Book color={iconColor} />} hoverIndicator label="Learn More" />
                    </Link>
                </CardFooter>
            </Card>
            <Card style={props.styles.propStyles} height="medium" width="medium">
                <CardHeader style={{backgroundColor: "#46E0B5"}} pad="small">
                    {props.cardTitleTwo}
                    <Code color={iconColor}/>
                </CardHeader>
                <CardBody pad="medium">
                    {props.cardTwo}
                </CardBody>
                <CardFooter pad={{horizontal: "medium"}} background="light-2">
                    <Link to="/projects">
                        <Button style={{margin: "1em 0 1em 0"}} icon={<Book color={iconColor} />} hoverIndicator label="Learn More" />
                    </Link>
                </CardFooter>
            </Card>
            { props.width > 1200 ? <Card style={props.styles.propStyles}  height="medium" width="medium">
                <CardHeader style={{backgroundColor: "#46E0B5"}} pad="small">
                    {props.cardTitleThree}
                    <Test color={iconColor}/>
                </CardHeader>
                <CardBody pad="medium">
                    {props.cardThree}
                </CardBody>
                <CardFooter pad={{horizontal: "medium"}} background="light-2">
                <Link to="/projects">
                    <Button style={{margin: "1em 0 1em 0"}} icon={<Book color={iconColor} />} hoverIndicator label="Learn More" />
                </Link>
                </CardFooter>
            </Card>: <Card style={props.styles.propStyles} height="medium" width="medium">
                <CardHeader style={{backgroundColor: "#46E0B5"}} pad="small">
                    Experience
                    <Test color={iconColor}/>
                </CardHeader>
                <CardBody pad="medium">
                    {props.cardThree}
                </CardBody>
                <CardFooter pad={{horizontal: "medium"}} background="light-2">
                <Link to="/projects">
                    <Button style={{margin: "1em 0 1em 0"}} icon={<Book color={iconColor} />} hoverIndicator label="Learn More" />
                </Link>
                </CardFooter>
            </Card>}
        </Box>
    );
}

export default CardsComp;