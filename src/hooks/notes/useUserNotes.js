import { useEffect } from 'react';
import { db } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../redux/note';

export default function useUserNotes() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.uid === null) return;
    // console.log(typeof user.uid);

    db.collection('notes')
      .where('uid', '==', user.uid)
      .orderBy('created_at')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const note = {
            created_at: data.created_at.seconds,
            title: data.title,
            body: data.body,
          };
          dispatch(addNote(note));
        });
      });
  }, [user.uid]);
}
