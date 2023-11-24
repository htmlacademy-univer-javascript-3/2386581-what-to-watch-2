import React, { ChangeEvent } from 'react';

type BaseInputProps = {
  classNameLabel: string;
  classNameInput: string;
  type: string;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  value?: string;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

function BaseInput({
  placeholder,
  id,
  disabled,
  onChange,
  value,
  label,
  classNameLabel,
  classNameInput,
  type,
}: BaseInputProps): JSX.Element {
  return (
    <React.Fragment>
      <label className={classNameLabel} htmlFor={id}>
        {label}
      </label>
      <input
        className={classNameInput}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </React.Fragment>
  );
}

export default BaseInput;
