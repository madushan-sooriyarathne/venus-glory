import {
  InputFiledGroup,
  Label,
  Field,
  ErrorMessage,
  SubmitButton,
} from "./styles";

interface Props {
  handleChange: (event: InputChangeEvent) => void;
  value: string;
  name: string;
  label: string;
  type?: "email" | "tel" | "text";
  error?: string;
  textArea?: boolean;
  required?: boolean;
  withButton?: boolean;
}

const InputField: React.FC<Props> = ({
  handleChange,
  value,
  name,
  label,
  type = "text",
  error = "",
  required = true,
  withButton = false,
}: Props): JSX.Element => {
  return (
    <InputFiledGroup>
      <Field
        name={name}
        id={name}
        value={value}
        placeholder={label}
        type={type}
        onChange={handleChange}
        autoComplete="off"
        required={required}
      />
      <Label htmlFor={name}>{label}</Label>
      <ErrorMessage>{error}</ErrorMessage>
      {withButton && <SubmitButton />}
    </InputFiledGroup>
  );
};

export default InputField;
