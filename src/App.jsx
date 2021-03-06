import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import GameRoom from './views/GameRoom/GameRoom';
import Layout from './components/Layout/Layout';
import EditProfile from './components/EditProfile/EditProfile';
import ProtectedRoute from './components/ProtectedRoute';
import { ProfileProvider } from './context/ProfileContext';
import './App.css';

export default function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <ProfileProvider>
            <Route exact path="/login">
              <Auth />
            </Route>
            <Route exact path="/register">
              <Auth isSigningUp />
            </Route>
            <ProtectedRoute exact path="/game-room">
              <GameRoom />
            </ProtectedRoute>
            <ProtectedRoute path="/edit-profile">
              <EditProfile />
            </ProtectedRoute>
          </ProfileProvider>
        </Switch>
      </Layout>
    </>
  );
}
