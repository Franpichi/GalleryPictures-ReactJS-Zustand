import React from 'react';
import usePhotoStore from '../Context/photoStore';
import SaveButton from '../Store/saveButton';
import '../Item/Item.css'

const Item = () => {
  const photos = usePhotoStore((state) => state.photos);

  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {photos.map((photo) => (
          <div key={photo.id} className='col'>
            <div className="card cardProduct">
              <img src={photo.url} className="card-img-top image" alt={`Imagen de ${photo.photographer}`} />
              <div className="card-body">
                <h5 className="card-title">{photo.photographer}</h5>
                <SaveButton photo={photo} className="button-save"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
