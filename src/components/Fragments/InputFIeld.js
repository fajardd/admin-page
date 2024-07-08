import Input from "../Elements/Input";
import Label from "../Elements/Label";

function InputField({ label, type, placeholder, id }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} placeholder={placeholder} id={id} />
    </div>
  );
}

export default InputField;
