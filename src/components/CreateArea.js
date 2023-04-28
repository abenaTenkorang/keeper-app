import React, { useState } from 'react';

function CreateArea() {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event, onAdd) {
    const { title, content } = note;

    onAdd({ title, content });
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="button" onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

// CreateArea.propTypes = {
//   onAdd: PropTypes.string,
// }.isRequired;

export default CreateArea;
