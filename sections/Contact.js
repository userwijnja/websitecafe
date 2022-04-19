import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import styled from "styled-components";

const ContactSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background: grey;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Nunito";
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontxxxl} - 5vw)`};
    color: #fff;
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
    color: #fff;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      SocialIcon {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 6rem;

      @media (max-width: 48em) {
        margin-right: 2rem;
      }
    }

    SocialIcon {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Facebook = styled(RiFacebookCircleLine)`
  width: 6rem;
  height: 6rem;
  &:hover {
    filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
      brightness(100%) contrast(97%);
  }
  @media (max-width: 48em) {
    width: 3rem;
    height: 3rem;
  }
`;
const Instagram = styled(FaInstagram)`
  width: 6rem;
  height: 6rem;

  &:hover {
    filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
      brightness(100%) contrast(97%);
  }
  @media (max-width: 48em) {
    width: 3rem;
    height: 3rem;
  }
`;
const Email = styled(MdOutlineEmail)`
  width: 6rem;
  height: 6rem;

  &:hover {
    filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
      brightness(100%) contrast(97%);
  }
  @media (max-width: 48em) {
    width: 3rem;
    height: 3rem;
  }
`;
const Telephone = styled(BsTelephone)`
  width: 6rem;
  height: 6rem;

  &:hover {
    filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
      brightness(100%) contrast(97%);
  }
  @media (max-width: 48em) {
    width: 3rem;
    height: 3rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Contact
      </Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.linkedin.com//">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/">
          <Instagram className="SocialIcon" />
        </a>
        <a href="https://www.instagram.com/">
          <Email className="SocialIcon" />
        </a>
        <a href="https://www.instagram.com/">
          <Telephone className="SocialIcon" />
        </a>
      </Icons>
    </ContactSection>
  );
};

export default Contact;
