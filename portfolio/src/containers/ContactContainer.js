import {React, useRef, useState} from "react";
import {Box, Form, FormField, TextInput, TextArea, Button, Heading, Text, Layer } from "grommet";
import NavBar from "../components/NavBar";
import FooterComp from "../components/FooterComp";
import emailjs from "@emailjs/browser"

const ContactContainer = () => {
    const [submitted, setSub] = useState();
    const form = useRef();

    const onOpen = () => setSub(true);
    const onClose = () => setSub(undefined);
    const [valid, setValid] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rvc0l2t', 'template_0qzva76', form.current, 'rvRyXixNhz6fHEfv5')
        .then((result) => {
            console.log("Message sent!:" + result);
            onOpen();
        }, (error) => {
            console.log("Message failed to send." + error);
        });
    };

    const styles = {
        color: "black",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        margin: "2em 12em 0 12em",
        padding: "3em",
        borderRadius: "2em",
        backgroundColor: "rgba(68, 161, 242, 0.4)"
    }
    const background = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        backgroundImage: "url(/images/downtownFlag.jpg)"
    }

    return(
        <Box style={background}>
            <NavBar/>
            <Box style={styles}>
                <Heading style={{fontSize: "2em", marginBottom: "1em"}}>Contact Me</Heading>
                <Form
                    validate="change"
                    onValidate={(validationResults) => {
                        console.log('validationResults = ', validationResults);
                        setValid(validationResults.valid);
                    }}
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <FormField name="name" htmlFor="text-input-id" required label="Name"
                        validate={[
                            { regexp: /^[a-z]/i },
                            (text) => {
                              if (text && text.length === 1)
                                return 'Must be >1 character';
                              return undefined;
                            },
                        ]}
                    >
                        <TextInput id="text-input-id" name="name" /> 
                    </FormField>
                    <FormField name="email" htmlFor="text-input-id" required label="Email"
                        validate={[
                            { regexp: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ },
                            (text) => {
                              if (text && text.length === 1)
                                return 'Must be a valid email address';
                              return undefined;
                            },
                        ]}
                    >
                        <TextInput id="text-input-id" name="email" /> 
                    </FormField>
                    <FormField name="message" htmlFor="text-input-id" required label="Message"
                        validate={[
                            { regexp: /^[a-z]/i },
                            (text) => {
                              if (text && text.length === 1)
                                return 'Must be >1 character';
                              return undefined;
                            },
                        ]}
                    >
                        <TextArea id="text-input-id" name="message" /> 
                    </FormField>
                    <Box direction="row" gap="medium">
                        <Button type="submit" primary label="Submit" style={{ backgroundColor:"#020659", 
                                                                            color:"#D9C091", border: "none" }} />
                        <Button type="reset" label="Reset" style={{color: "black"}} />
                    </Box>
                </Form>
            </Box>
            {submitted && (
            <Layer
                id="emailSent"
                position="center"
                onClickOutside={onClose}
                onEsc={onClose}
            >
                <Box pad="medium" gap="small" width="medium">
                    <Heading level={3} margin="none">
                        Email Sucesfully Sent!
                    </Heading>
                    <Text>Thank you for reaching out! I look forward to reading your message.</Text>
                    <Box
                        as="footer"
                        gap="small"
                        direction="row"
                        align="center"
                        justify="end"
                        pad={{ top: 'medium', bottom: 'small' }}
                    >
                    </Box>
                </Box>
            </Layer>
        )}
        <FooterComp/>
        </Box>
    );
}

export default ContactContainer;