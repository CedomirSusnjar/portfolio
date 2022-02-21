import { Form, FormInput, FormLabel, FormTitle, Label, MessageBox, StyledButton } from "./Style";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {

    const { t } = useTranslation();
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = (event) => {
       alert(`Submitted data: [subject: ${subject}, message: ${message}]`);
       event.preventDefault();
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const formTitle = t('contact.submitDataTitle');
    const subjectLabel = t('contact.subject');
    const messageLabel = t('contact.message');
    const submitButtonLabel = t('contact.submit');

    return (
        <>
            <FormTitle>{formTitle}</FormTitle>
            <Form onSubmit={submitForm}>
                <FormLabel>
                    <Label>{subjectLabel}:</Label>
                    <FormInput onChange={handleSubjectChange} value={subject} type="text" />
                </FormLabel>
                <FormLabel>
                    <Label>{messageLabel}:</Label>
                    <MessageBox onChange={handleMessageChange} value={message} rows="5" type="text" />
                </FormLabel>
                <StyledButton htmlType='submit'>{submitButtonLabel}</StyledButton>
            </Form>
        </>
        
    );
};

export default ContactForm;