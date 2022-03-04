import { render } from '@testing-library/react';
import ProfilePop from './ProfilePop';

const profile = {
  profile: {
    name: 'James',
    displayName: 'Jimmothy',
    email: 'james.armen@gmail.com',
    bio: 'This is a bio',
  },
};

test('Tests that the profile popup renders', () => {
  const { container } = render(<ProfilePop profile={profile} />);

  expect(container).toMatchSnapshot();
});
