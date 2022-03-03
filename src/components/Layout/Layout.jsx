import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { UserProvider } from '../../context/UserContext';

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
