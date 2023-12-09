function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  amountDisable=false,
  currencyDisable=false,
  selectCurrency="usd",
  className=""
}){
    return(
        <div className={`w-full flex flex-wrap bg-white px-4 py-3 text-sm rounded-lg ${className}`}>
             <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">{label}</label>
                <input
                  type="number"
                  value={amount}
                  placeholder="Amount"
                  className="outline-none mb-2"
                  disabled={amountDisable}
                  onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                  />
             </div>
             <div className="w-1/2 justify-end text-right">
                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
                 <select
                 value={selectCurrency}
                 onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                 disabled={currencyDisable} 
                 className="px-4 bg-gray-60 outline-none py-2 rounded-lg">
                    {
                        currencyOptions.map((currency)=>
                         <option key={currency} value={currency}>
                            {currency}
                         </option>
                        )
                    }
                 </select>
             </div>
        </div>
    );
}

export default InputBox;