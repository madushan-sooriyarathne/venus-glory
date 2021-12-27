import ReactMarkdown from "react-markdown";

import { Description } from "./styles";

interface Props {
  description: string;
}

const ProductDescription: React.FC<Props> = ({
  description,
}: Props): JSX.Element => {
  return (
    <Description>
      <ReactMarkdown>{description}</ReactMarkdown>
    </Description>
  );
};

export default ProductDescription;
