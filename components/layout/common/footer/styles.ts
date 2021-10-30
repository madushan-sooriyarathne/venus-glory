import { statSync } from "fs";
import styled from "styled-components";

const FooterSection = styled.footer`
  grid-area: fo;

  width: 100%;
  height: auto;
  min-height: 40rem;
  padding: 5rem 20rem 3rem 20rem;
  margin-top: 15rem;
  background-color: ${(props) => props.theme.colors.primary};

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr)) minmax(
      min-content,
      2fr
    );
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    "br co ne"
    "ri ri ri";
  align-items: start;
  justify-items: center;
  column-gap: 15rem;
  row-gap: 5rem;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 1rem;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;
`;

const SocialIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  stroke: ${(props) => props.theme.colors.blackLight};
  transition: stroke 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    stroke: ${(props) => props.theme.colors.black};
  }
`;

const NewsletterForm = styled.form`
  width: 100%;
  height: auto;
`;

const Copyrights = styled.div`
  grid-area: ri;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.5rem;
`;

export {
  FooterSection,
  LinkGroup,
  SocialMediaIcons,
  SocialIcon,
  NewsletterForm,
  Copyrights,
};
