import { useDispatch } from 'react-redux';
import { authActions } from '../store/Reduxs';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label >Email</label>
            <input type='email' />
          </div>
          <div className={classes.control}>
            <label >Password</label>
            <input type='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
