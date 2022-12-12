import React, { useState } from 'react';
import './editField.scss';

const FieldEdit = ({ initialValue, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(value);
    setIsEditing(false);
  };

  return (
    <div className="field-edit">
      {isEditing ? (
        <>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{value}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default FieldEdit;
