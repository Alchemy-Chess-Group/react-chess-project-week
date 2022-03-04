import { render } from '@testing-library/react';
import Footer from './Footer';

test('Test the footer renders', () => {
  const { container } = render(<Footer />);

  expect(container).toMatchSnapshot();
});
