import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { getUser } from '../../services/users';

export const UserContext = createContext();

const UserProvider = ({ mockUser, children }) => {
  const [user, setUser] = useState(
    mockUser ? { id: mockUser.id, email: mockUser.email } : {}
  );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be rendered inside a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
