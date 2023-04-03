import {create} from 'zustand';
const usePhotoStore = create((set) => ({
  photos: [],

  init: async () => {

    const response = await fetch('./database.json');
    const data = await response.json();
    set({ photos: data });
  },
}));

export default usePhotoStore;
