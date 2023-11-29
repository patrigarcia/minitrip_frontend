import { create } from "zustand";


type DateRangeState = {
    startDate: Date | null;
    endDate: Date | null;
    setStartDate: (date: Date | null) => void;
    setEndDate: (date: Date | null) => void;
};


const useDateRangeStore = create<DateRangeState>((set) => ({
    startDate: null,
    endDate: null,
    setStartDate: (date) => set({ startDate: date }),
    setEndDate: (date) => set({ endDate: date }),
}));

export default useDateRangeStore;
