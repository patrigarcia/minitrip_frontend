
import create from 'zustand'

interface TagState {
  tags: string[];
  inputTag: string;
  addTag: (tag: string) => void;
  removeTag: (tagToRemove: string) => void;
  setInputTag: (inputTag: string) => void;
}

const useStore = create<TagState>((set) => ({
  tags: [],
  inputTag: '',
  addTag: (tag) => set((state) => ({ tags: [...state.tags, tag] })),
  removeTag: (tagToRemove) => set((state) => ({ tags: state.tags.filter(tag => tag !== tagToRemove) })),
  setInputTag: (inputTag) => set({ inputTag }),
}))

export default useStore;
