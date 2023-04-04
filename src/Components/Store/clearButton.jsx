import React from 'react';
import usePhotoStore from '../Context/photoStore';

const ClearButton = () => {
  const clearSavedImages = usePhotoStore((state) => state.clearSavedImages);

  const handleClearClick = () => {
    clearSavedImages();
  };

  return (
    <button className="btn btn-danger" onClick={handleClearClick}>Clear</button>
  );
};

export default ClearButton;
