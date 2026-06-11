function InputNumber({ value, onChange }) {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder="Introduce un número"
    />
  );
}

export default InputNumber;
