import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import { UserProvider } from './context/UserContext.js';
import { ProfileProvider } from './context/ProfileContext.js';
import { MemoryRouter } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

const mockUser = { id: 21, email: 'testtesttest@gmail.com' };

jest.mock('./context/UserContext.js');

test('just making a behavioral testing', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </UserProvider>
    </MemoryRouter>
  );

  const title = screen.getByText(/once upawn a time/i);
  expect(title).toBeInTheDocument();

  const signinButton = screen.getByRole('button', {
    name: /sign in/i,
  });
  userEvent.click(signinButton);

  const emailBox = screen.getByLabelText(/email-box/i);
  const passwordBox = screen.getByLabelText(/password-box/i);

  userEvent.type(emailBox, 'minok@gmail.com');
  userEvent.type(passwordBox, '12345678');

  const loginButton = screen.getByRole('button', {
    name: /submit/i,
  });
});

test('writing a test for user after logged in ', () => {});
