import { useState } from 'react';

import './App.css';
import SignUpForm from './auth/SignUpForm';
import SignInForm from './auth/SignInForm';

function App() {
  const [forSignIn, toggleSignInView] = useState(false);

  const toggleView = function () {
    toggleSignInView(function (prevValue) {
      return !prevValue;
    });
  };

  return (
    <>
      {forSignIn ? <SignUpForm /> : <SignInForm />}
      <button className="toggle-button" onClick={toggleView}>
        Goto {forSignIn ? 'SignIn' : 'SignUp'}
      </button>
    </>
  );
}

export default App;
