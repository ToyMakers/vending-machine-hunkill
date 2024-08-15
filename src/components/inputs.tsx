import useStore from '../stores/store';
import style from '../styles/vendor.module.css';
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
      <button className={style.button} onClick={() => insert(50)}>
        50
      </button>
      <button className={style.button} onClick={() => insert(100)}>
        100
      </button>
      <button className={style.button} onClick={() => insert(500)}>
        500
      </button>
      <button className={style.button} onClick={() => insert(1000)}>
        1000
      </button>
    </div>
  );
};

export default Inputs;
