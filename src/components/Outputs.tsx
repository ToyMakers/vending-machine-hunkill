import useStore from '../stores/store';

type StoreType = {
  decreaseTotal: (coin: number) => void;
  clearAll: () => void;
  total: number;
};

const Inputs = () => {
  const { clearAll } = useStore() as StoreType;

  const reset = () => {
    clearAll();
  };

  return (
    <div>
      <button
        onClick={() => {
          reset();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Inputs;
