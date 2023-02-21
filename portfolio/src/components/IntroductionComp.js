import React from "react";
import { Box, Card, CardHeader, CardBody, CardFooter, Button } from "grommet";
import { Brush, Book, Code, Test} from "grommet-icons";

const IntroductionComp = () => {
    const cardConstStyles = {
        flex: 1,
        background: "#327AD9"
    }
    return(
        <Box style={{ display: "flex", flexDirection: "row" }}>
            <Card style={{...cardConstStyles, margin: "2em 0 0 2em"}} height="medium" width="large">
                <CardHeader pad="small">
                    Design
                    <Brush color="#1F4CA6"/>
                </CardHeader>
                <CardBody pad="medium">
                    I have been designing websites since I was 16 years old and started my journey into design,
                    at a secondary institution called West-MEC. Ever since my time at West-MEC, I have been dedicating
                    an immense amount of time to learning design fundamentals. I recently have been really into the 
                    React framework. The concept of designing components that can be reused has been seriously intriguing.
                </CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">
                    <Button style={{margin: "1em 0 1em 0"}} icon={<Book color="#020659" />} hoverIndicator label="Learn More" />       
                </CardFooter>
            </Card>
            <Card style={{...cardConstStyles, margin: "2em 2em 0 2em"}} height="medium" width="medium">
                <CardHeader pad="small">
                    Programming
                    <Code color="#1F4CA6"/>
                </CardHeader>
                <CardBody pad="medium">
                    
                </CardBody>
                <CardFooter pad={{horizontal: "medium"}} background="light-2">
                    <Button style={{margin: "1em 0 1em 0"}} icon={<Book color="#020659" />} hoverIndicator label="Learn More" />
                </CardFooter>
            </Card>
            <Card style={{...cardConstStyles, margin: "2em 2em 2em 0"}} height="medium" width="medium">
                <CardHeader pad="small">
                    Experience
                    <Test color="#1F4CA6"/>
                </CardHeader>
                <CardBody pad="medium">
                </CardBody>
                <CardFooter pad={{horizontal: "medium"}} background="light-2">
                    <Button style={{margin: "1em 0 1em 0"}} icon={<Book color="#020659" />} hoverIndicator label="Learn More" />
                </CardFooter>
            </Card>
        </Box>
    );
}

export default IntroductionComp;