import React from 'react';
import usePhotoStore from '../Context/photoStore';

const SaveButton = ({ photo }) => {
  const addSavedImage = usePhotoStore((state) => state.addSavedImage);

  const handleSaveClick = () => {
    addSavedImage(photo);
  };

  return (
    <button className="btn btn-primary" onClick={handleSaveClick}>Save</button>
  );
};

export default SaveButton;
