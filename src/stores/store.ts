import { create } from 'zustand';
import { drinks } from '../components/types/type';

const initialize = {
  total: 0,
  infos: [] as drinks[],
  returns: 0,
  inputs: 0,
};

const useStore = create((set) => ({
  // 전체 돈 = 지갑
  total: 0,
  // 음료수
  infos: initialize.infos,
  // 벤더 투입구
  inputs: 0,
  // 벤더 반환기
  returns: 0,

  // 전체 초기화

  clearAll: () => {
    set(initialize);
  },

  // 지갑 돈 복사
  increaseTotal: (cost: number) =>
    set((state: { total: number }) => ({ total: state.total + cost })),
  // 지갑 -> 벤더 투입 하였으니 지갑에 있는 돈 감소
  decreaseTotal: (cost: number) =>
    set((state: { total: number }) => ({ total: state.total - cost })),
  // 벤더에 들어간 돈
  inputVendor: (cost: number) =>
    set((state: { inputs: number; total: number }) => ({
      inputs: state.inputs + cost,
      total: state.total - cost,
    })),
  // 음료수를 구입 했으니 벤더 들어간 돈 감소
  outputVendor: (cost: number) =>
    set((state: { inputs: number }) => ({ inputs: state.inputs - cost })),
  // 벤더 투입된 돈에서 -> 배출구에서 돈 나옴
  returnsVendor: (cost: number) =>
    set((state: { inputs: number; returns: number }) => ({
      inputs: state.inputs - cost,
      returns: state.returns + cost,
    })),

  // 벤더 -> 지갑에 다시 넣었으니 지갑에 있는 돈 증가 벤더 돈 반환기 0
  returnTotal: (cost: number) =>
    set((state: { total: number; returns: number }) => ({
      total: state.total + cost,
      returns: state.returns - cost,
    })),

  // 음료수 정보 추가
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
  returnTotal22: (cost: number) =>
    set((state: { total: number; returns: number }) => ({
      total: state.total + cost,
      returns: state.returns - cost,
    })),
}));

export default useStore;
