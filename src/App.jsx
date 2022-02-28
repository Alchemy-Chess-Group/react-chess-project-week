import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
  return (
    <h1>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/edit-profile">
            <AuthForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </h1>
  );
}
