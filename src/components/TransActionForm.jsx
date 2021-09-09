import React, { useState } from 'react'

const TransActionFrom = ({ addTransaction, setIsshow }) => {

	const [formValues, setFormValues] = useState([{
		type: "expense",
		amount: 0,
		desc: "",
	}]);

	const changeHandler = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	}

	const submitForm = (e) => {
		e.preventDefault();
		addTransaction(formValues);
		setIsshow(false);
	}
	return (
		<form onSubmit={submitForm}>
			<input type="text" name="desc" onChange={changeHandler} placeholder="description" />
			<input type="text" name="amount" onChange={changeHandler} placeholder="amount" />
			<div className="radioBox">
				<input type="radio" id="expense" value="expense" name="type" onChange={changeHandler} checked={formValues.type === "expense"} />
				<label htmlFor="expense">Expense</label>
				<input type="radio" id="income" value="income" name="type" onChange={changeHandler} checked={formValues.type === "income"} />
				<label htmlFor="income">Income</label>
			</div>
			<button className="btn primary" type="submit">Add transaction</button>
		</form>
	);
}

export default TransActionFrom;