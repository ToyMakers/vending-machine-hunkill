import useStore from '../stores/store';

type StoreType = {
  increaseTotal: (coin: number) => void;
  total: number;
};

const Inputs = () => {
  const { increaseTotal, total } = useStore() as StoreType;

  const insert = (coin: number) => {
    increaseTotal(coin);
    console.log(total);
  };
  return (
    <div>
      <button onClick={() => insert(50)}>50</button>
      <button onClick={() => insert(100)}>100</button>
      <button onClick={() => insert(500)}>500</button>
      <button onClick={() => insert(1000)}>1000</button>
    </div>
  );
};

export default Inputs;
