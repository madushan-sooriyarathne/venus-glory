import PrimaryHeading from "@components/headings/primary-heading";
import { IngredientsSection, IngredientsList, IngredientItem } from "./styles";

interface Props {
  productName: string;
  ingredients: string[];
}

const ProductIngredients: React.FC<Props> = ({
  productName,
  ingredients,
}: Props): JSX.Element => {
  return (
    <IngredientsSection>
      <PrimaryHeading
        align="left"
        small
      >{`${productName} is made out of`}</PrimaryHeading>
      <IngredientsList>
        {ingredients.map((ing, index) => (
          <IngredientItem key={`ingredient-${index}`}>{ing}</IngredientItem>
        ))}
      </IngredientsList>
    </IngredientsSection>
  );
};

export default ProductIngredients;
