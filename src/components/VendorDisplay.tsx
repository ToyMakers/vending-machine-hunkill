import useStore from '../stores/store';
import { drinks } from './types/type';
import vendorDrinks from '../assets/VendorDrinks.json';
import style from '../styles/vendor.module.css';
type StoreType = {
  outputVendor: (coin: number) => void;
  clearInfo: () => void;
  clearTotal: () => void;
  addInfo: (drink: drinks) => void;
  inputVendor: (coin: number) => void;
  returnsVendor: (coin: number) => void;
  returnTotal: (coin: number) => void;
  inputs: number;
  returns: number;
  total: number;
  infos: drinks[];
};

type VendorDrinks = {
  value: number;
  label: string;
};

const Vendors = () => {
  const {
    inputVendor,
    returnsVendor,
    outputVendor,
    addInfo,
    returnTotal,
    total,
    inputs,
    returns,
  } = useStore() as StoreType;

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
    console.log(returns);
  };

  const handleInputVendor = (cost: number) => {
    if (total - cost < 0) {
      return alert('돈이 부족합니다!');
    }
    return inputVendor(cost);
  };

  return (
    <div className={style.vendor}>
      <div className={style.drinkHeader}>
        {vendorDrinks.map((button: VendorDrinks, index: number) => {
          const whatDrinkCan = `drink_${String.fromCharCode(65 + index)}`;
          return (
            <div className={style.drinkContent}>
              <div className={style.can}>
                <div className={style.canTop}></div>
                <div className={style[whatDrinkCan]}></div>
                <div className={style.canBottom}></div>
              </div>
              <button
                className={style.buttonVendor}
                key={index}
                onClick={() =>
                  deposit(button.value, String.fromCharCode(65 + index))
                }
              >
                {button.label}
              </button>
            </div>
          );
        })}
      </div>

      <div className={style.inputHeader}>
        <div className={style.vendorMessage}>투입구</div>
        <button className={style.coin} onClick={() => handleInputVendor(50)}>
          50
        </button>
        <button className={style.coin} onClick={() => handleInputVendor(100)}>
          100
        </button>
        <button className={style.bill} onClick={() => handleInputVendor(1000)}>
          1000
        </button>
        <button className={style.bill} onClick={() => handleInputVendor(5000)}>
          5000
        </button>
      </div>
      <div className={style.vendorMessage}>{inputs}</div>
      <div>
        <button
          className={style.buttonVendor}
          onClick={() => returnsVendor(inputs)}
        >
          {' '}
          return
        </button>
      </div>
      <div className={style.vendor_displays_can}>
        <p>pick</p>
        <p>{returns}</p>
        <button onClick={() => returnTotal(returns)}>|--|</button>
      </div>
    </div>
  );
};

export default Vendors;
