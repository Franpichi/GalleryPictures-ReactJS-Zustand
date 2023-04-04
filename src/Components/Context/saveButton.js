import React from 'react';
import usePhotoStore from '../Context/photoStore';

const SaveButton = ({ photo }) => {
  const addSavedImage = usePhotoStore((state) => state.addSavedImage);

  const handleSaveClick = () => {
    addSavedImage(photo);
  };

  return (
    <button className="button-save" onClick={handleSaveClick}>Save</button>
  );
};

export default SaveButton;
