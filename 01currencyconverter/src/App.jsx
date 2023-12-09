import { useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [from,setFrom]=useState("usd");
  const [to, setTo]=useState("inr");
  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=useCurrencyInfo(from);

  const options=Object.keys(currencyInfo);

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert=()=>{
        setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-black">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 p-5 rounded-lg backdrop-blur-sm bg-white/30">
          <form onSubmit={(e)=>{
              e.preventDefault();
              convert();
               }
            }>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}
                onCurrencyChange={(currency)=>setAmount(amount)}
              />
              <div className="relative w-full h-0.5">
                <button onClick={swap} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-800 px-2 py-0.5 text-white rounded-lg border-2 border-white hover:bg-blue-500 transition-all duration-300 ease-linear">swap</button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                 label="To"
                 amount={convertedAmount}
                 currencyOptions={options}
                 selectCurrency={to}
                 onCurrencyChange={(amount)=>setTo(amount)}
                 amountDisable={true}
                />
              </div>
              <button type="submit" className="bg-blue-800 w-full px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition-all duration-300 ease-linear uppercase">
                Convert {from} To {to}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
