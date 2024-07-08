function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor}>
      <p className="font-medium mb-2">{children}</p>
    </label>
  );
}

export default Label;
