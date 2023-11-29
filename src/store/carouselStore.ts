import { create } from 'zustand';

interface CarouselState {
  index: number;
  setIndex: (i: number) => void;
}

export const useCarouselStore = create<CarouselState>((set) => ({
  index: 0,
  setIndex: (i) => set({ index: i }),
}));
