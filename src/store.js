import { create } from "zustand";

const usePhotoSelect = create ((set) => ({
    photoSelect: [],
    
    addPhotoSelect: (photo) => set((state) => ({ photoSelect: [...state.photoSelect, photo]})),
    removePhotoSelect: (photoId) => set((state) => ({ selectedPhotos: state.selectedPhotos.filter((photo) => photo.id !== photoId) })),
    clearSelectedPhotos: () => set({ selectedPhotos: [] }),



}))

export default usePhotoSelect