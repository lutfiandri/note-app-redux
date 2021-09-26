import NoteItem from './NoteItem';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from '../redux/note';

export default function NoteList() {
  const notes = useSelector((state) => state.notes.value);

  const noteListElement = notes.map((note) => (
    <NoteItem key={note.id} title={note.title} body={note.body} />
  ));

  return <div>{noteListElement}</div>;
}
