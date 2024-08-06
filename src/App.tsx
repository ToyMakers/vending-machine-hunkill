import style from './styles/vendor.module.css';
import Inputs from './components/Inputs';
import useStore from './stores/store';
import Outputs from './components/Outputs';
import VendorDisplay from './components/VendorDisplay';
import { drinks } from './components/types/type';

type StoreType = {
  total: number;
  infos: drinks[];
};

const App = () => {
  const { total, infos } = useStore() as StoreType;
  return (
    <div className={style.Main}>
      <div className={style.layout}>
        <div className={style.vendor}>
          <div className={style.venor_layout}>
            <div className={style.vendor_displays}>
              <VendorDisplay />
              <div className={style.vendor_displays_can}></div>
              <div className={style.vendor_displays_price}></div>
            </div>
          </div>
        </div>
        <div className={style.interact}>
          <span> input</span>
          <div className={style.input}>
            <Inputs />
            <span>{total}</span>
          </div>
          <div>
            <span> output</span>
            <div className={style.output}>
              <Outputs />
              <ul>
                {infos.map((info, index) => (
                  <li key={index} className={style[`drink_${info.name}`]}>
                    Name: {info.name}, Count: {info.count}, Cost: {info.cost},
                    Afford: {info.afford.toString()}
                  </li>
                ))}
              </ul>
              <span>qwer{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
