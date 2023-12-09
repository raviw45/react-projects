import { useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [convertedTo,setConvertedTo]=useState("");
  const [amount,setAmount]=useState("");
  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo);

  const convert=()=>{
    setConvertedTo(amount * currencyInfo[to]);
  }

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedTo(amount);
    setAmount(convertedTo);
  }
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 ">
       <div className="max-w-md mx-auto p-5 bg-white/30 w-full rounded-lg border-2 border-gray-60">
            <form onSubmit={(e)=>{
              e.preventDefault();
              convert()
            }}>
              <h3 className="text-center uppercase text-3xl mb-4 font-bold text-white tracking-wide">Currency Covnerter</h3>
              <div>
                 <InputBox
                   label="From"
                   amount={amount}
                   amountDisable={false}
                   currencyOptions={options}
                   selectCurrency={from}
                   onAmountChange={(amount)=>setAmount(amount)}
                   onCurrencyChange={(currency)=>setFrom(currency)}
                 />
              </div>
              <div className="relative py-1.5">
                <button onClick={swap} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 px-6 py-1 text-white rounded-lg hover:bg-blue-700 duration-300 transition ease-linear">
                  swap
                </button>
              </div>
              <div className="mb-3">
                <InputBox
                  label="To"
                  amount={convertedTo}
                  currencyDisable={false}
                  amountDisable={true}
                  selectCurrency={to}
                  currencyOptions={options}
                  onAmountChange={(amount)=>setAmount(amount)}
                  onCurrencyChange={(currency)=>setTo(currency)}
                />
              </div>
              <button type="submit" className="bg-blue-600 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-800 duration-300 transition ease-linear">Convert USD to INR</button>
            </form>
       </div>
    </div>
  )
}

export default App
