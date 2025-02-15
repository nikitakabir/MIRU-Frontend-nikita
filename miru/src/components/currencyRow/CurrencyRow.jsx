import './currencyrow.css'

function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
      } = props
    const twoOptions = currencyOptions.reduce(function(filtered,option) {
        if(option === 'USD' || option ==='JPY'){
            filtered.push(option)
        }

        return filtered
    },[])
  return (
    <div className='row-container'>
        <input type="number" className="input-amount" value={amount} onChange={onChangeAmount}/>
        <select className='currency-select'value={selectedCurrency} onChange={onChangeCurrency}>
            {
               twoOptions.map(o=>{
                    return <option className="slc-option" key={o} value={o}>{o}</option>
                })
            }
            <option value="Hi"></option>
        </select>
    </div>
  )
}

export default CurrencyRow