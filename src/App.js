import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
  const isLogin = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {isLogin ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
