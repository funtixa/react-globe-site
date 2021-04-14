import React from "react";
import {
    NewsletterWrap,
    NewsletterContainer,
    TextWrap,
    BigText,
    SmallText,
    FormWrap,
    Field,
    Button,
} from './NewsletterElements'

const Newsletter = () => {
  return (
    <>
      <NewsletterContainer>
        <NewsletterWrap>
          <TextWrap>
            <BigText></BigText>
            <SmallText></SmallText>
          </TextWrap>
          <FormWrap>
            <Field></Field>
            <Button></Button>
          </FormWrap>
        </NewsletterWrap>
      </NewsletterContainer>
    </>
  );
};

export default Newsletter;
