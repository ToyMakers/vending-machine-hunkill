import { useEffect, useState } from 'react';
import useStore from '../stores/store';
import { drinks } from './types/type';
import vendorDrinks from '../assets/VendorDrinks.json';
type StoreType = {
  decreaseTotal: (coin: number) => void;
  clearInfo: () => void;
  clearTotal: () => void;
  addInfo: (drink: drinks) => void;
  total: number;
  infos: drinks[];
};

type VendorDrinks = {
  value: number;
  label: string;
};

const Inputs = () => {
  const { decreaseTotal, addInfo, total } = useStore() as StoreType;

  const deposit = (coin: number, name: string) => {
    if (total - coin < 0) {
      return alert('금액이 적습니다!');
    }

    const drinkInfo: drinks = {
      name: name,
      count: 1,
      cost: coin,
      afford: true,
    };

    decreaseTotal(coin);
    addInfo(drinkInfo);
    console.log(total);
  };
  return (
    <div>
      {vendorDrinks.map((button: VendorDrinks, index: number) => (
        <button key={index} onClick={() => deposit(button.value, button.label)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Inputs;
