import useStore from '../stores/store';
import { drinks } from './types/type';
import vendorDrinks from '../assets/VendorDrinks.json';
type StoreType = {
  outputVendor: (coin: number) => void;
  clearInfo: () => void;
  clearTotal: () => void;
  addInfo: (drink: drinks) => void;
  inputVendor: (coin: number) => void;
  inputs: number;
  returns: number;
  infos: drinks[];
};

type VendorDrinks = {
  value: number;
  label: string;
};

const Inputs = () => {
  const { inputVendor, outputVendor, addInfo, inputs, returns } =
    useStore() as StoreType;

  // 음료수 나오는 출구
  const deposit = (coin: number, name: string) => {
    if (inputs - coin < 0) {
      return alert('금액이 적습니다!');
    }

    const drinkInfo: drinks = {
      name: name,
      count: 1,
      cost: coin,
      afford: true,
    };

    outputVendor(coin);
    addInfo(drinkInfo);
    console.log(inputs, returns);
  };

  return (
    <div>
      {vendorDrinks.map((button: VendorDrinks, index: number) => (
        <button
          key={index}
          onClick={() => deposit(button.value, String.fromCharCode(65 + index))}
        >
          <div className="drinks"></div>
          {button.label}
        </button>
      ))}

      <button onClick={() => inputVendor(50)}> 50 </button>
      <button onClick={() => inputVendor(100)}> 100 </button>
      <button onClick={() => inputVendor(1000)}> 1000 </button>
      <button onClick={() => inputVendor(5000)}> 5000 </button>
    </div>
  );
};

export default Inputs;
