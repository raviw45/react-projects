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
    <div className={`p-3 bg-white flex text-sm rounded-lg ${className}`}>
          <div className="w-1/2">
             <label className="text-black/40 mb-2 inline-block">{label}</label>
             <input
               type="number"
               placeholder="amount"
               value={amount}
               disabled={amountDisable}
               onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
               className="outline-none bg-transparent py-1.5 w-full"
             />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
              value={selectCurrency}
              disabled={currencyDisable}
              onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
              className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            >
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