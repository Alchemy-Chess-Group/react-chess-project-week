import Header from './Header';
import Footer from './Footer';
import { UserProvider } from '../context/UserContext';

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
