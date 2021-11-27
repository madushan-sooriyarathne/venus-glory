import {
  CheckBoxContainer,
  CheckBoxComponent,
  CheckBoxIcon,
  CheckBoxIconFill,
  CheckBoxLabel,
} from "./styles";

interface Props {
  value: string;
  name: string;
  onChange: (event: any) => void;
}

const CheckBox: React.FC<Props> = ({
  value,
  name,
  onChange,
}: Props): JSX.Element => {
  return (
    <CheckBoxContainer htmlFor={value}>
      <CheckBoxComponent
        type="checkbox"
        id={value}
        value={value}
        name={name}
        onChange={onChange}
        multiple
      />
      <CheckBoxIcon>
        <CheckBoxIconFill />
      </CheckBoxIcon>
      <CheckBoxLabel>{value}</CheckBoxLabel>
    </CheckBoxContainer>
  );
};

export default CheckBox;
