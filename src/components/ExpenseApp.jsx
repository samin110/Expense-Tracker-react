import React, { useState, useEffect } from 'react'
import TransActionComponent from '../components/TransActionComponent';
import OverViewComponent from './OverViewComponent';

const ExpenseApp = () => {
	const [expense, setExpense] = useState(0);
	const [income, setIncome] = useState(0);
	const [transActions, setTransActions] = useState([])

	useEffect(() => {
		let exp = 0;
		let inc = 0;

		transActions.forEach((t) => {
			t.type === "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount));
		})
		setIncome(inc);
		setExpense(exp);

	}, [transActions])

	const addTransaction = (formValues) => {
		setTransActions([...transActions, { ...formValues, id: Date.now() }]);
	}

	return (
		<section className="container">
			<OverViewComponent income={income} expense={expense} addTransaction={addTransaction} />
			<TransActionComponent transActions={transActions} />
		</section >
	);
}

export default ExpenseApp;