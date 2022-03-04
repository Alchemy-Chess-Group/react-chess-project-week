import { render, screen } from '@testing-library/react';
import AuthForm from './AuthForm';

test('auth page should render a form', () => {
  const { container } = render(<AuthForm />);

  screen.getByRole('textbox', { label: /email/i });

  screen.getByRole('textbox', { label: /password/i });

  screen.getByRole('button', { name: /submit/i });

  expect(container).toMatchSnapshot();
});
