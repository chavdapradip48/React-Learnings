import "./currency-conveter.css"
import useCurrencyInfo from "./useCurrencyInfo"
import { useState } from "react";

const CurrencyConverter = () => {
	const [amount, setAmount] = useState(0);
	const [convertedAmount, setConvertedAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const currencyInfo = useCurrencyInfo(from);
	const options = Object.keys(currencyInfo);
	
	const swapData = () => {
		setFrom(to);
		setTo(from);
		setAmount(convertedAmount);
		setConvertedAmount(amount)
	};

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to]);
	}

	function amountHandler(event) {
		console.log(event.target.value);
		setAmount(()=> Number(event.target.value));
	}

	function currencyTypeHandler(event, label) {
		if(label === "From") {
			setFrom(()=> event.target.value);
		} else if(label === "To") {
			setTo(()=> event.target.value);
		} else {
			console.log("Label invalid");
		}
	}

	return (
		<section id="currency-container">
			<div id="currency-main">
				<CurrencyBox key={"1"} label={"From"}
				 amount= {amount} 
				 onAmountChange={amountHandler} 
				 onCurrencyChange={currencyTypeHandler}
				  currencyOptions = {options} 
				  selectCurrency= {from} />
				<CurrencyBox key={"2"} label={"To"}
				 amount= {convertedAmount}
				  onAmountChange={amountHandler}
				   onCurrencyChange={currencyTypeHandler} 
				   currencyOptions = {options} 
				   selectCurrency= {to}/>
				<button 
				type="button"
				 className="swap btn btn-primary" 
				 onClick={(e)=> swapData()}>swap</button>
				<button type="button" 
				className="convert-currency btn btn-primary" 
				onClick={(e)=> convert()}
				>{`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}</button>
			</div>
		</section>
	);
};

export default CurrencyConverter;

function CurrencyBox({label, amount, onAmountChange, 
	onCurrencyChange, currencyOptions= [], selectCurrency, amountDisable = false, currencyDisable = false}) {
	return (
		<div className="input-div">
			<label className="currency-input-label">{label}</label>
			<input 
				type="number" 
				value={amount} 
				className="form-control currency-input" 
				disabled={amountDisable} 
				onChange={onAmountChange} />
			<label className="currency-type">Type</label>
			<select 
				className="form-control currency-full-input" 
				value={selectCurrency}
				disabled={currencyDisable}
				onChange={(e) => onCurrencyChange(e, label)} >
				{currencyOptions.map((currentCurrency) => {
					return <option key={currentCurrency} value={currentCurrency}>{currentCurrency}</option>;
				})}
			</select>
		</div>
	);
}