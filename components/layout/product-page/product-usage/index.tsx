import ReactMarkdown from "react-markdown";

import PrimaryHeading from "@components/headings/primary-heading";
import { UsageSection, UsageDescription } from "./styles";

interface Props {
  productName: string;
  usageInstructions: string;
}

const ProductUsage: React.FC<Props> = ({
  productName,
  usageInstructions,
}: Props): JSX.Element => {
  return (
    <UsageSection>
      <PrimaryHeading
        align="left"
        small
      >{`How to use ${productName}`}</PrimaryHeading>
      <UsageDescription>
        <ReactMarkdown>{usageInstructions}</ReactMarkdown>
      </UsageDescription>
    </UsageSection>
  );
};

export default ProductUsage;
