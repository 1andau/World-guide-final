import React from 'react';
import googleLogo from '../assets/icons/google-logo.svg';
import githubLogo from '../assets/icons/github-logo.svg';
import { useUserContext } from './context/userContext';
import { Redirect } from "react-router-dom";

function SignInPopup({ onClickClosePopup }) {


    const { signInWithGoogle, signInWithGithub } = useUserContext();

    const { user} = useUserContext();


  return (
    <div className="auth">

      {user && <Redirect to={"/home"} />}
        <div className="popup-blackout">
          <div className="auth__popup">
            <span onClick={onClickClosePopup} className="popup__close auth__close">&times;</span>
            <h1>Sign In</h1>
            <hr />

            <div className="auth-ways">
              <div className="auth__buttnon" onClick={signInWithGoogle}>
                <div className="button-content">
                  <div className="under-logo">
                    <img
                      className="auth__buttnon-logo"
                      src={googleLogo}
                      alt=""
                    />
                  </div>

                  <span className="auth__buttnon-text">Sign in with Google</span>
                </div>
                <div className="auth__button-transition"></div>
              </div>
              <div className="auth__buttnon" onClick={signInWithGithub}>
                <div className="button-content">
                  <div className="under-logo">
                    <img
                      className="auth__buttnon-logo"
                      src={githubLogo}
                      alt=""
                    />
                  </div>

                  <span className="auth__buttnon-text">Sign in with GitHub</span>
                </div>
                <div className="auth__button-transition"></div>
              </div>
            </div>
            
          </div>
         </div>
       </div>
  )
}

export default SignInPopup