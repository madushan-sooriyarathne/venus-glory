import ImageComponent from "@components/image-component";
import { useState } from "react";
import { ImageContainer, ImagePreview, ThumbRow, Thumbnail } from "./styles";

interface Props {
  images: Image[];
}

const ProductImageSet: React.FC<Props> = ({ images }: Props): JSX.Element => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <ImageContainer id="product-images">
      <ImagePreview>
        <ImageComponent image={images[selected]} />
      </ImagePreview>

      <ThumbRow>
        {images.map((img, index) => (
          <Thumbnail
            onClick={() => setSelected(index)}
            selected={index === selected}
          >
            <ImageComponent image={img} />
          </Thumbnail>
        ))}
      </ThumbRow>
    </ImageContainer>
  );
};

export default ProductImageSet;
