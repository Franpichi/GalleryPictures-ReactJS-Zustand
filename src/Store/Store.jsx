import { useStore } from "zustand";



const Store = () => {
  const { photos, addToSelectedPhotos, handleSaveClick, handleClearClick } = useStore()

  return (
    <div>
      {photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} />
          <button onClick={() => addToSelectedPhotos(photo)}>Select</button>
        </div>
      ))}
      <div>
        <button onClick={handleSaveClick}>Save selected photos</button>
        <button onClick={handleClearClick}>Clear selected photos</button>
      </div>
    </div>
  )
}

export default Store
