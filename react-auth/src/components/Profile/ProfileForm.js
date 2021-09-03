import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBB0quL7bZ_7f5LwgQ07rKSuzt75cAGqUE', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      })
    }).then(res => {
      history.push('/');
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
