import { useState } from "react";
import Inp from "./components/Inp";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://plus.unsplash.com/premium_photo-1676673189320-50de7e9d2aa1?w=900)`,
      }}
    >
      <div className="w-full max-w-md border rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <Inp
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onCurrencyChange={setFrom}
            onAmountChange={setAmount}
          />

          <div className="text-center my-2">
            <button
              type="button"
              onClick={swap}
              className="border bg-slate-900 text-white px-3 py-1 rounded"
            >
              Swap
            </button>
          </div>

          <Inp
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={setTo}
            amountDisable
          />

          <button
            type="submit"
            className="w-full mt-4 bg-slate-900 text-white py-3 rounded"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
