import { useDispatch } from 'react-redux';
import { addNote } from '../redux/note';
import { useRef } from 'react';

export default function Input() {
  const dispatch = useDispatch();

  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const addNoteToStore = (e) => {
    // e.preventDefault();

    if (!titleRef.current || !bodyRef.current) return;

    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    if (title === '' || body === '') {
      alert('write up the title and the note itself');
      return;
    }

    console.log(title, body);
    dispatch(addNote({ title, body }));

    titleRef.current.value = '';
    bodyRef.current.value = '';
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
