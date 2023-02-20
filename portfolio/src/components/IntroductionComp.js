import React from "react";
import { Box, Card, CardHeader, CardBody, CardFooter, Button } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";

const IntroductionComp = () => {
    return(
        <Box style={{ display: "flex", flexDirection: "row" }}>
            <Card style={{flex: 1, marginLeft: "2em"}} height="medium" width="medium">
                <CardHeader pad="medium">Header</CardHeader>
                <CardBody pad="medium">Body</CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">
                    <Button
                    icon={<Favorite color="red" />}
                    hoverIndicator
                    />
                    <Button icon={<ShareOption color="plain" />} hoverIndicator />
                </CardFooter>
            </Card>
            <Card style={{flex: 1}} height="medium" width="medium">
                <CardHeader pad="medium">Header</CardHeader>
                <CardBody pad="medium">Body</CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">
                    <Button
                    icon={<Favorite color="red" />}
                    hoverIndicator
                    />
                    <Button icon={<ShareOption color="plain" />} hoverIndicator />
                </CardFooter>
            </Card>
            <Card style={{flex: 1, marginRight: "2em"}} height="medium" width="medium">
                <CardHeader pad="medium">Header</CardHeader>
                <CardBody pad="medium">Body</CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">
                    <Button
                    icon={<Favorite color="red" />}
                    hoverIndicator
                    />
                    <Button icon={<ShareOption color="plain" />} hoverIndicator />
                </CardFooter>
            </Card>
        </Box>
    );
}

export default IntroductionComp;