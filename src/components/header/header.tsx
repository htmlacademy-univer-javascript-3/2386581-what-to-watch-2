import React from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import { AuthorizationStatus } from '../../const';

type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

function Header({ children, className = '' }: HeaderProps) {
  return (
    <header className={`page-header ${className}`}>
      <Logo />
      {children}
      {!AuthorizationStatus.Unknown && (
        <UserBlock authStatus={AuthorizationStatus.NoAuth} />
      )}
    </header>
  );
}

export default Header;
