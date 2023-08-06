import { ChangeEvent } from "react";

import { StyledInput } from "./StyledInput";

interface InputProps {
  type: string;
  id?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
  innerHTML?: React.ReactNode;
}

export const Input = ({
  type,
  id,
  value,
  placeholder,
  className,
  onChange,
  onBlur,
  innerHTML,
}: InputProps) => {
  return (
    <span className={"input-" + type}>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        id={id}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
      />
      {innerHTML}
    </span>
  );
};
