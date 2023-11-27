import React, { ChangeEvent, forwardRef } from 'react';

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

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      placeholder,
      id,
      disabled,
      onChange,
      value,
      label,
      classNameLabel,
      classNameInput,
      type,
    }: BaseInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => (
    <React.Fragment>
      <label className={classNameLabel} htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        className={classNameInput}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </React.Fragment>
  )
);

BaseInput.displayName = 'BaseInput';

export default BaseInput;
