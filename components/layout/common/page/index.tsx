import { ReactNode } from "react";
import Head from "next/head";

import { PageContainer, ContentWrapper } from "./styles";
import NavBar from "../nav-bar";
import Footer from "../footer";

interface Props {
  title?: string;
  children: ReactNode[] | ReactNode;
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
      <Footer />
    </PageContainer>
  );
};

export default Page;
