import { render } from '@testing-library/react';
import Button from './button';

describe('Button Component', () => {
  it('shold render a button with the provided class', () => {
    const { container } = render(<Button className="test" />);
    const button = container.querySelector('button.test');
    expect(button).toBeInTheDocument();
  });
});
