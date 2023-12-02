import React from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import { useAppSelector } from '../../hooks/store';

type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

function Header({ children, className = '' }: HeaderProps) {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  return (
    <header className={`page-header ${className}`}>
      <Logo />
      {children}

      <UserBlock authStatus={authorizationStatus} />
    </header>
  );
}

export default Header;
