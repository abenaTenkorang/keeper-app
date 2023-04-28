import React from 'react';
import { PropTypes } from 'prop-types';

function Note({
  id, title, content, handleDelete,
}) {
  const handleClick = () => {
    handleDelete(id);
  };
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button type="button" onClick={handleClick}>DELETE</button>
    </div>
  );
}

Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}.isRequired;

export default Note;
