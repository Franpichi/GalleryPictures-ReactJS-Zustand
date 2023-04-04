import {create} from 'zustand';

const usePhotoStore = create((set, get) => ({
  photos: [],
  savedImages: [],
  init: async () => {
    try {
      const response = await fetch('./database.json');
      const data = await response.json();
      set({ photos: data });
    } catch (error) {
      console.error(error);
    }
  },
  addSavedImage: (photo) => {
    const savedImages = get().savedImages;
    set({ savedImages: [...savedImages, photo] });
  },
  clearSavedImages: () => {
    set({ savedImages: [] });
  }
}));

export default usePhotoStore;
