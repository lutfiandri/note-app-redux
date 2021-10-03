import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../redux/note';
import { useRef } from 'react';
import { db } from '../firebase';

export default function Input() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const addNoteToStore = (e) => {
    if (!titleRef.current || !bodyRef.current) return;

    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    if (title === '' || body === '') {
      alert('write up the title and the note itself');
      return;
    }

    const now = new Date();

    db.collection('notes')
      .add({
        uid: user.uid,
        created_at: now,
        title: title,
        body: body,
      })
      .then(() => {
        const note = {
          created_at: Number(now.getTime() - now.getMilliseconds()) / 1000,
          title,
          body,
        };
        dispatch(addNote(note));
        titleRef.current.value = '';
        bodyRef.current.value = '';
      })
      .catch((error) => {
        console.log(error);
        alert('sorry, there was an error');
      });
  };

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          ref={titleRef}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Note</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          ref={bodyRef}
        ></textarea>
      </div>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={addNoteToStore}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}
