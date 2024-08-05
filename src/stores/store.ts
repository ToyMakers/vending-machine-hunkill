import { create } from 'zustand';
import { drinks } from '../components/types/type';

const initialize = {
  total: 0,
  infos: [] as drinks[],
};

const useStore = create((set) => ({
  total: 0,
  infos: initialize.infos,
  increaseTotal: (cost: number) =>
    set((state: { total: number }) => ({ total: state.total + cost })),
  decreaseTotal: (cost: number) =>
    set((state: { total: number }) => ({ total: state.total - cost })),

  addInfo: (drink: drinks) =>
    set((state: { infos: drinks[] }) => {
      const existingDrink = state.infos.find(
        (info) => info.name === drink.name
      );
      if (existingDrink) {
        // 이미 같은 이름의 음료가 있을 경우 count 증가
        return {
          infos: state.infos.map((info) =>
            info.name === drink.name ? { ...info, count: info.count + 1 } : info
          ),
        };
      } else {
        // 같은 이름의 음료가 없을 경우 새로 추가
        return {
          infos: [...state.infos, drink],
        };
      }
    }),
  clearAll: () => {
    set(initialize);
  },
}));

export default useStore;
