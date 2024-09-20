import React from 'react';
import styled from "styled-components";
import {FaInstagram, FaGithub , FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Card = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
`;
const Title2 = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const Name = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;
const Text = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  gap: 6px;
  margin-bottom: 10px;
`;
const IconWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 10px;
  font-size: 30px;
  font-weight: 600;
`;

const Icons = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
`;
const TextWrap = styled.div`
  display: flex;
  gap: 8px;
`;
const MailIcon = styled.div`
  font-size: 23px;
  font-weight: 600;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <FlexWrap>
          <Card>
            <Title2>About</Title2>
            <Name>FitTrack</Name>
            <Text>
              Fittrack is designed to help you stay on top of your health and wellness goals by seamlessly tracking your calorie burn and optimizing your workout routines.
            </Text>
          </Card>
          <Card>
            <Title2>Information</Title2>
            <Name>Address</Name>
            <Text>
              132, My Street, Kingston,<br /> New York 12401.
            </Text>
            <TextWrap>
              <MailIcon>
                <HiOutlineMail />
              </MailIcon>
              <Text>mairfarooq21@gmail.com</Text>
            </TextWrap>
          </Card>
          <Card>
            <Title2>Connect</Title2>
            <IconWrapper>
              <Icons href="https://www.linkedin.com/in/syedmair/">
                <FaLinkedin />
              </Icons>
              <Icons href="https://github.com/mairfarooq21">
                <FaGithub />
              </Icons>
              <Icons href="https://www.instagram.com/maiirfarooq/">
                <FaInstagram />
              </Icons>
            </IconWrapper>
          </Card>
        </FlexWrap>
      </Wrapper>
    </Container>
  )
}

export default Contact