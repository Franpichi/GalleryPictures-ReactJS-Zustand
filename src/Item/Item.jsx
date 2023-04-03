import React, { useEffect } from 'react';
import usePhotoStore from '../photoStore';
import { Link } from 'react-router-dom';
import { useStore } from 'zustand';
/* import { useState } from 'react';
 */
const Item = () => {
  const photos = usePhotoStore((state) => state.photos);
  useEffect(() => {
    usePhotoStore.getState().init();
  }, []);
    const addToSelectedPhotos = useStore((state) => state.addToSelectedPhotos);
  
    const handleSaveClick = (photo) => {
      addToSelectedPhotos(photo);

  };




return (
  <div className='container'>
    <div className='row row-cols-1 row-cols-md-4 g-4'>
      {photos.map((photo) => (
        <div key={photo.id} className='col'>
          <div className="card cardProduct">
            <img src={photo.url} className="card-img-top image" alt={`Imagen de ${photo.photographer}`} />
            <div className="card-body">
              <h5 className="card-title">{photo.photographer}</h5>
              <button className="btn btn-primary" onClick={handleSaveClick} ><Link className="nav-link" to={`/item/${Item}`}>Save</Link></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
); };

export default Item;