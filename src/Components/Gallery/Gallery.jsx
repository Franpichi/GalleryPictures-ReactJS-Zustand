import React from 'react';
import usePhotoStore from '../Context/photoStore';
import ClearButton from '../Context/clearButton';
import '../Gallery/Gallery.css'
import '../Item/Item.css'
import '../Navbar/Navbar.css'
const Gallery = () => {
  const savedImages = usePhotoStore((state) => state.savedImages);

  return (
    <div className="container">
      <p className='title-gallery' >Saved Images</p>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {savedImages.map((photo) => (
          <div key={photo.id}  className='col'>
            <div className="card cardProduct">
            <img src={photo.url} className="card-img-top image" alt={`Imagen de ${photo.photographer}`} />
            <h5 className="card-title title">{photo.photographer}</h5>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ClearButton />
      </div>
    </div>
  );
};

export default Gallery;
