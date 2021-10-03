import NoteItem from './NoteItem';
import { useSelector } from 'react-redux';
import useUserNotes from '../hooks/notes/useUserNotes';

export default function NoteList() {
  useUserNotes();
  const notes = useSelector((state) => state.notes.value);

  const noteListElement = notes
    .slice()
    .reverse()
    .map((note) => (
      <NoteItem key={note.id} title={note.title} body={note.body} />
    ));

  return <div>{noteListElement}</div>;
}
