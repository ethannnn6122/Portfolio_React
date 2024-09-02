import React from "react";

import { Box, Card, CardHeader, CardBody, CardFooter, Button } from "grommet";
import { Brush, Book, Code, Test} from "grommet-icons";
import { Link } from "react-router-dom";

const CardsComp = (props) => {
    let boxStyles = {
        display: "flex",
        flexDirection: props.cardFlexPos,
        paddingBottom: "2em",
        marginRight: "2em"
    };

    if (props.width < 1000 && props.width > 700 ) {
        boxStyles = {
            display: "flex", 
            flexDirection: "column",
            marginRight: "4em"
        }
    } 
    if (props.width < 700) {
        boxStyles = {
            display: "flex",
            flexDirection: "column",
            marginRight: "2em",
        }
    }

    return(
        <Box style={boxStyles}>
            {console.log(props)}
            <Card style={props.styles.propStyles} height="medium" width="medium">
                <CardHeader style={{backgroundColor: "#020659"}} pad="small">
                    {props.cardTitleOne}
                    <Brush color="#1F4CA6"/>
                </CardHeader>
                <CardBody pad="medium">
                    {props.cardOne}
                </CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">
                    <Link to="/projects">
                        <Button style={{margin: "1em 0 1em 0"}} icon={<Book color="#020659" />} hoverIndicator label="Learn More" />
                    </Link>
                </CardFooter>
            </Card>
            <Card style={props.styles.propStyles} height="medium" width="medium">
                <CardHeader style={{backgroundColor: "#020659"}} pad="small">
                    Programming
                    <Code color="#1F4CA6"/>
                </CardHeader>
                <CardBody pad="medium">
                    {props.cardTwo}
                </CardBody>
                <CardFooter pad={{horizontal: "medium"}} background="light-2">
                    <Link to="/projects">
                        <Button style={{margin: "1em 0 1em 0"}} icon={<Book color="#020659" />} hoverIndicator label="Learn More" />
                    </Link>
                </CardFooter>
            </Card>
            { props.width > 1000 ? <Card style={props.styles.propStyles}  height="medium" width="medium">
                <CardHeader style={{backgroundColor: "#020659"}} pad="small">
                    Experience
                    <Test color="#1F4CA6"/>
                </CardHeader>
                <CardBody pad="medium">
                    {props.cardThree}
                </CardBody>
                <CardFooter pad={{horizontal: "medium"}} background="light-2">
                <Link to="/projects">
                    <Button style={{margin: "1em 0 1em 0"}} icon={<Book color="#020659" />} hoverIndicator label="Learn More" />
                </Link>
                </CardFooter>
            </Card>: <Card style={props.styles.propStyles} height="medium" width="medium">
                <CardHeader style={{backgroundColor: "#020659"}} pad="small">
                    Experience
                    <Test color="#1F4CA6"/>
                </CardHeader>
                <CardBody pad="medium">
                    {props.cardThree}
                </CardBody>
                <CardFooter pad={{horizontal: "medium"}} background="light-2">
                <Link to="/projects">
                    <Button style={{margin: "1em 0 1em 0"}} icon={<Book color="#020659" />} hoverIndicator label="Learn More" />
                </Link>
                </CardFooter>
            </Card>}
        </Box>
    );
}

export default CardsComp;