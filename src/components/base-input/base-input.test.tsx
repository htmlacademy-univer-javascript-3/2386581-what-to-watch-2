import { render } from '@testing-library/react';
import BaseInput from './base-input';

describe('BaseInput Component', () => {
  it('shold render an input with the provided data', () => {
    const { container } = render(
      <BaseInput classNameInput="test" classNameLabel="test" type="text" />
    );
    const input = container.querySelector('input.test');
    expect(input).toBeInTheDocument();
  });
});
