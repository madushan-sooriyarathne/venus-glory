import Page from "@components/layout/common/page";
import PageCover from "@components/layout/common/page-cover";
import ShopPage from "@components/layout/shop/shop-page";
import { NextPage } from "next";

interface Props {}

const name: NextPage<Props> = ({}: Props): JSX.Element => {
  return (
    <Page>
      <PageCover
        image={{ src: "/assets/img/perfumes.jpg", blurUrl: "" }}
        heading="Shop"
      />
      <ShopPage />
    </Page>
  );
};

export default name;
