import React from 'react';
import usePhotoStore from '../Context/photoStore';
import ClearButton from '../Store/clearButton';
import { Link } from 'react-router-dom';
const Gallery = () => {
  const savedImages = usePhotoStore((state) => state.savedImages);

  return (
    <div className="container">
      <h1>Saved Images</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {savedImages.map((photo) => (
          <div key={photo.id} className="col">
            <img src={photo.url} className="card-img-top" alt={`Imagen de ${photo.photographer}`} />
          </div>
        ))}
      </div>
      <ClearButton />
      <li className="nav-item"><Link className='nav-link' to={"/"}>Home</Link></li>
    </div>
  );
};

export default Gallery;
