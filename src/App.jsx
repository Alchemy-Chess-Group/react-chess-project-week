import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Header from './components/Header';
import Home from './components/Home';
import Auth from './views/Auth';

export default function App() {
  return (
    <h1>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/register">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </h1>
  );
}
