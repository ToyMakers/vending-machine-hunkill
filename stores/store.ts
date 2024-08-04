import { create } from 'zustand';

const useStore = create((set) => ({
  total: 0,
  increaseTotal: (cost: number) =>
    set((state) => ({ total: state.total + cost })),
  decreaseTotal: (cost: number) =>
    set((state) => ({ total: state.total - cost })),
}));

export default { useStore };
