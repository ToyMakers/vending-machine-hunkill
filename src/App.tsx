import { useState } from 'react';
import style from './styles/vendor.module.css';
import Inputs from './components/Inputs';
import useStore from './stores/store';

type StoreType = {
  total: number;
};

const App = () => {
  const { total } = useStore() as StoreType;
  return (
    <div className={style.Main}>
      <div className={style.layout}>
        <div className={style.vendor}>
          <div className={style.venor_layout}>
            <div className={style.vendor_displays}>
              <div className={style.vendor_displays_can}></div>
              <div className={style.vendor_displays_price}></div>
            </div>
          </div>
        </div>
        <div className={style.interact}>
          <text> input</text>
          <div className={style.input}></div>

          <div>
            <text> output</text>
            <div className={style.output}>
              <Inputs />
              <text>{total}</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
