import { useState } from 'react';

const Inputs = () => {
  const [inputCoin, setInputCoin] = useState(0);
  const [total, setTotal] = useState(0);

  const insert = (coin: number) => {
    setTotal(total + coin);

    return 1;
  };
  return (
    <div>
      <button onClick={() => insert(100)}>100</button>
      <button>500</button>
      <button>1000</button>
      <button>10000</button>
    </div>
  );
};

export default Inputs;
