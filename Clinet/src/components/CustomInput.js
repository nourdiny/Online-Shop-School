function CustomInput(props) {
  const {ref,type,name,className,placeholder} = props;

  return (
    <div>
      <input
        ref={ref}
        type={type}
        name={name}
        id={name}
        className={`form-control ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;
