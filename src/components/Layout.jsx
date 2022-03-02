import Header from './Header';
import Footer from './Footer';
import { UserProvider } from '../context/UserContext';

import { ProfileProvider } from '../context/ProfileContext';

export default function Layout({ children }) {
  return (
    <div>
      <UserProvider>
        <Header />
        {children}
        <Footer />
      </UserProvider>
    </div>
  );
}
