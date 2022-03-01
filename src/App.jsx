import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Auth from './views/Auth';
import GameRoom from './views/GameRoom';
import Layout from './components/Layout';
import EditProfile from './components/EditProfile';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Auth />
            </Route>
            <Route exact path="/register">
              <Auth isSigningUp />
            </Route>
            <Route exact path="/game-room">
              <GameRoom />
            </Route>
            <Route exact path="/edit-profile">
              <EditProfile />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}
