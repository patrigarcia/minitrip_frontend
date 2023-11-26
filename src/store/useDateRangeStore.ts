import create from "zustand";

// Definir los tipos para el estado y las acciones de tu store
type DateRangeState = {
    startDate: Date | null;
    endDate: Date | null;
    setStartDate: (date: Date | null) => void;
    setEndDate: (date: Date | null) => void;
};

// Crear el store con los tipos definidos
const useDateRangeStore = create<DateRangeState>((set) => ({
    startDate: null,
    endDate: null,
    setStartDate: (date) => set({ startDate: date }),
    setEndDate: (date) => set({ endDate: date }),
}));

export default useDateRangeStore;
