import { Link } from 'react-router-dom';

type LogoProps = {
  className?: string;
};

function Logo({ className = '' }: LogoProps): JSX.Element {
  return (
    <div data-testid="logo" className="logo">
      <Link data-testid="logo-link" to="/" className={`logo__link ${className}`}>
        <span data-testid="logo-letter" className="logo__letter logo__letter--1">W</span>
        <span data-testid="logo-letter" className="logo__letter logo__letter--2">T</span>
        <span data-testid="logo-letter" className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
