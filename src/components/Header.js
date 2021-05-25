import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/Reduxs'

const Header = () => {
  const auths = useSelector(state => state.auth.authanticated)

  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  }

  return (<>
    {auths && (<header className={classes.header}>
      <h1>Auth Using Redux..</h1>
      <nav>
        <ul>
          <li>
            <h3>My Products</h3>
          </li>
          <li>
            <h3>My Sales</h3>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>)}
  </>
  );
};

export default Header;
