import { useDispatch } from 'react-redux';
import { setActiveUser } from '../../redux/user';
import { auth } from '../../firebase';
import { useState, useEffect } from 'react';

export default function useActiveUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        const payload = {
          uid: user.uid,
          email: user.email,
        };
        dispatch(setActiveUser(payload));
      } else {
        console.log('no active user');
      }
    });
  }, []);
}
