import React, { FormEventHandler } from 'react';

export interface BaseButtonProps {
  onClick?: (event: React.FormEvent) => void;
  onSubmit?: FormEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
}

function Button({
  onSubmit,
  onClick,
  children,
  disabled,
  type,
  className,
}: BaseButtonProps) {
  return (
    <button
      onSubmit={onSubmit}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
