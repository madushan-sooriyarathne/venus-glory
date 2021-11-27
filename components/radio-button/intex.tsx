import { Label, RadioIcon, RadioComponent, LabelContent } from "./styles";

interface Props {
  name: string;
  value: string;
  onChange: (event: any) => void;
}

const RadioButton: React.FC<Props> = ({
  name,
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <Label>
      <RadioComponent
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      ></RadioComponent>
      <RadioIcon />
      <LabelContent>{value}</LabelContent>
    </Label>
  );
};

export default RadioButton;
