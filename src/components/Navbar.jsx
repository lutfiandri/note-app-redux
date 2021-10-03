import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme';
import { setActiveUser, signOutUser } from '../redux/user';
import { auth, googleAuthProvider } from '../firebase';
import useSignInWithGoogle from '../hooks/auth/useActiveUser';
import { deleteAllNotes } from '../redux/note';

export default function Navbar() {
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navbarStyles = {
    background: theme[theme.type].primary,
    color: theme[theme.type].accent,
  };

  const iconTheme =
    theme.type === 'light' ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '1.5rem', width: '1.5rem' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke={theme[theme.type].accent}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '1.5rem', width: '1.5rem' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke={theme[theme.type].accent}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    );

  const signInHandler = () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        console.log(result.user);
        const payload = {
          uid: result.user.uid,
          email: result.user.email,
        };
        dispatch(setActiveUser(payload));
      })
      .catch((error) => console.log(error));
  };

  const signOutHandler = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(signOutUser());
        dispatch(deleteAllNotes());
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="navbar sticky-top" style={navbarStyles}>
      <div className="container">
        <div className="navbar-brand">Note App With Redux</div>
        <div>{user?.email}</div>
        {user.uid === null ? (
          <div className="btn" onClick={signInHandler}>
            Sign In
          </div>
        ) : (
          <div className="btn" onClick={signOutHandler}>
            Log Out
          </div>
        )}
        <div className="btn" onClick={() => dispatch(toggleTheme())}>
          {iconTheme}
        </div>
      </div>
    </nav>
  );
}
