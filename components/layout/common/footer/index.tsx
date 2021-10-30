import { useFormik } from "formik";

import PrimaryHeading from "@components/headings/primary-heading";
import InputField from "@components/input-field";
import SiteLink from "@components/link";
import Paragraph from "@components/paragraph";
import TitleGroup from "@components/title-group";
import {
  Copyrights,
  FooterSection,
  LinkGroup,
  NewsletterForm,
  SocialIcon,
  SocialMediaIcons,
} from "./styles";
import TertiaryHeading from "@components/headings/tertiary-heading";
import { FormEvent } from "react";

interface FieldValues {
  email: string;
}

const Footer: React.FC = (): JSX.Element => {
  const newsletterFormik = useFormik<FieldValues>({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors["email"] = "Required!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors["email"] = "Invalid Email Address";
      }

      return errors;
    },
    onSubmit: (values) => {
      // handle the submit event here
      alert(`submitted! ${values.email}`);
    },
  });

  return (
    <FooterSection>
      <TitleGroup>
        <TertiaryHeading>Venus Glory</TertiaryHeading>
        <Paragraph>
          Your trusted skin care partner. We strive to make skincare and
          affordable and enjoyable ritual for anyone who wants to take care of
          themselves and their body.
        </Paragraph>
        <LinkGroup>
          <SiteLink route="/payment-refund-policy">
            Payment & Refund Policy
          </SiteLink>
          <SiteLink route="/privacy-policy">Privacy Policy</SiteLink>
        </LinkGroup>
      </TitleGroup>
      <TitleGroup>
        <TertiaryHeading>Connect with us</TertiaryHeading>
        <LinkGroup>
          <Paragraph>(0094) 71 688 0657</Paragraph>
          <Paragraph>hello@venusglory.com</Paragraph>
        </LinkGroup>
        <SocialMediaIcons>
          <SocialIcon>
            <use xlinkHref="/assets/svg/sprites.svg#facebook" />
          </SocialIcon>
          <SocialIcon>
            <use xlinkHref="/assets/svg/sprites.svg#instagram" />
          </SocialIcon>
          <SocialIcon>
            <use xlinkHref="/assets/svg/sprites.svg#twitter" />
          </SocialIcon>
        </SocialMediaIcons>
      </TitleGroup>
      <TitleGroup>
        <TertiaryHeading>Subscribe to our newsletter</TertiaryHeading>

        <NewsletterForm
          onSubmit={newsletterFormik.handleSubmit}
          autoComplete="off"
        >
          <InputField
            handleChange={newsletterFormik.handleChange}
            value={newsletterFormik.values.email}
            error={newsletterFormik.errors.email}
            name="email"
            label="Email"
            type="email"
            withButton
          />
        </NewsletterForm>
        <Paragraph small>
          By submitting this form, I agree to having my personal and contact
          information processed and used for the purpose of marketing
          communications. For more details, Please refer to our Privacy Policy.
        </Paragraph>
      </TitleGroup>
      <Copyrights>
        <Paragraph small>
          <b>Venus Glory</b> © {new Date().getFullYear()} All rights reserved.
        </Paragraph>
        <Paragraph small>
          A solution by <a href="https://advertaro.lk">Adveratro</a>
        </Paragraph>
      </Copyrights>
    </FooterSection>
  );
};

export default Footer;
