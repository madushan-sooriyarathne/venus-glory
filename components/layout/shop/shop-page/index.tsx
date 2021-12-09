import PrimaryButton from "@components/buttons/primary-button";
import CheckBox from "@components/check-box";
import PrimaryHeading from "@components/headings/primary-heading";
import ProductCard from "@components/product-card";
import RadioButton from "@components/radio-button/intex";
import { useFormik } from "formik";
import {
  ShopContainer,
  FilterPanel,
  ProductArea,
  ProductCategorySection,
  ProductCategoryTitle,
  ProductCategoryGrid,
} from "./styles";

interface Props {
  products: Product[];
}

const ShopPage: React.FC<Props> = ({ products }: Props): JSX.Element => {
  interface FormikProps {
    radio: string;
    checked: string[];
  }

  const radioFormik = useFormik<FormikProps>({
    initialValues: {
      radio: "",
      checked: [],
    },
    onSubmit: (values) => {
      alert(values.radio);
    },
  });

  // TODO: Add logic to group products into categories. & Fix product list mapping

  return (
    <ShopContainer>
      <FilterPanel>
        <form onSubmit={radioFormik.handleSubmit}>
          <div>
            <RadioButton
              value="Button"
              name="radio"
              onChange={radioFormik.handleChange}
            />
            <RadioButton
              value="Another Button"
              name="radio"
              onChange={radioFormik.handleChange}
            />
          </div>
          <div>
            <CheckBox
              name="checked"
              onChange={radioFormik.handleChange}
              value="Ulta"
            />
            <CheckBox
              name="checked"
              onChange={radioFormik.handleChange}
              value="L'Oréal"
            />
            <CheckBox
              name="checked"
              onChange={radioFormik.handleChange}
              value="Gilette"
            />
            <CheckBox
              name="checked"
              onChange={radioFormik.handleChange}
              value="Nivea"
            />
          </div>
        </form>
      </FilterPanel>
      <ProductArea>
        <ProductCategorySection>
          <ProductCategoryTitle>
            <PrimaryHeading small>Skincare</PrimaryHeading>
            <PrimaryButton small route="/categories/skincare">
              Explore
            </PrimaryButton>
          </ProductCategoryTitle>
          <ProductCategoryGrid>
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
          </ProductCategoryGrid>
        </ProductCategorySection>
        <ProductCategorySection>
          <ProductCategoryTitle>
            <PrimaryHeading small>Skincare</PrimaryHeading>
            <PrimaryButton small route="/categories/skincare">
              Explore
            </PrimaryButton>
          </ProductCategoryTitle>
          <ProductCategoryGrid>
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
            <ProductCard product={products[0]} />
          </ProductCategoryGrid>
        </ProductCategorySection>
      </ProductArea>
    </ShopContainer>
  );
};

export default ShopPage;
