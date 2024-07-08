import Input from "../Elements/Input";
import Label from "../Elements/Label";

function InputField({ label, type, placeholder, id, value, onChange }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
