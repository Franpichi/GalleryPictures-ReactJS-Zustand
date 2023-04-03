import {create} from 'zustand';

export const useStore = create(set => ({
    selectedPhotos: [],
    addToSelectedPhotos: photo => {
      set(state => ({
        selectedPhotos: [...state.selectedPhotos, photo]
      }))
    },
    handleSaveClick: () => {
    },
    handleClearClick: () => {
    }
  }))
  