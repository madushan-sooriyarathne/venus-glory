import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import ItemGrid from "@components/layout/common/grid-layout";
import Paragraph from "@components/paragraph";

import {
  CategoriesSection,
  CategoryBox,
  DetailsOverlay,
  ImageWrapper,
} from "./styles";

const Categories: React.FC = (): JSX.Element => {
  return (
    <ItemGrid>
      <CategoryBox>
        <ImageWrapper>
          <ImageComponent
            image={{ src: "/assets/img/face-care.jpg", blurUrl: "" }}
          />
        </ImageWrapper>
        <DetailsOverlay>
          <PrimaryHeading small>Face Care</PrimaryHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Paragraph>
        </DetailsOverlay>
      </CategoryBox>
      <CategoryBox>
        <ImageWrapper>
          <ImageComponent
            image={{ src: "/assets/img/skin-care.jpg", blurUrl: "" }}
          />
        </ImageWrapper>
        <DetailsOverlay>
          <PrimaryHeading small>Skin Care</PrimaryHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Paragraph>
        </DetailsOverlay>
      </CategoryBox>

      <CategoryBox>
        <ImageWrapper>
          <ImageComponent
            image={{ src: "/assets/img/hair-care.jpg", blurUrl: "" }}
          />
        </ImageWrapper>
        <DetailsOverlay>
          <PrimaryHeading small>Hair Care</PrimaryHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Paragraph>
        </DetailsOverlay>
      </CategoryBox>
    </ItemGrid>
  );
};

export default Categories;
