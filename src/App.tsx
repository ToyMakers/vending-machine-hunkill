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
        <div>
          <div className={style.venor_layout}>
            <div className={style.vendor_displays}>
              <div className={style.textMessage}>select drinks</div>
              <VendorDisplay />
              <div className={style.vendor_displays_can}></div>
              <div className={style.vendor_displays_price}></div>
            </div>
          </div>
        </div>
        <div className={style.interact}>
          <div className={style.input}>
            <span className={style.inputName}> My Wallet</span>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
