import React from 'react';
import Draggable from 'react-draggable';
import './Note.css'; // We'll create this CSS file next

function Note({ note }){
  return (
    <Draggable>
      <div className="note">
        <p>{note}</p>
      </div>
    </Draggable>
  );
};

export default Note;
