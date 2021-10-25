import { ReactNodeArray, ReactNode, Children } from "react";
import Head from "next/head";

import { PageContainer, ContentWrapper } from "./styles";
import NavBar from "../nav-bar";

interface Props {
  title?: string;
  children: ReactNodeArray | ReactNode;
}

const Page: React.FC<Props> = ({
  title = "Venus Glory | Natural cosmetics for gentle skincare",
  children,
}: Props): JSX.Element => {
  return (
    <PageContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
    </PageContainer>
  );
};

export default Page;
