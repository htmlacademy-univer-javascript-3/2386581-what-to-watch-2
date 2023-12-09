import React from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

function HeaderComponent({ children, className = '' }: HeaderProps) {
  return (
    <header className={`page-header ${className}`}>
      <Logo />
      {children}

      <UserBlock />
    </header>
  );
}

const Header = React.memo(HeaderComponent);

export default Header;
