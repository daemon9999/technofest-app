import classNames from "classnames";

interface InputGroupProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
  name: string
}

export default function InputGroup({
  label,
  onChange,
  value,
  id,
  name
}: InputGroupProps) {
  return (
    <label htmlFor={id} className="relative">
      <span className={classNames("text-10 absolute top-1/2 -translate-y-1/2 left-4 transition-all duration-300", {
        "-top-0 text-sm": value
      })}>{label}</span>
      <input
      name={name}
        id={id}
        onChange={onChange}
        value={value}
        type="text"
        className="outline-none border-b py-3 px-4  border-10 w-full  text-100"
      />
    </label>
  );
}
