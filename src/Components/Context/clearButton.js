import React from 'react';
import usePhotoStore from './photoStore';
import '../Gallery/Gallery.css'

const ClearButton = () => {
  const clearSavedImages = usePhotoStore((state) => state.clearSavedImages);

  const handleClearClick = () => {
    clearSavedImages();
  };

  return (
    <button className='button-clear' onClick={handleClearClick}>Clear All</button>
  );
};

export default ClearButton;
