import React, { useEffect, useState } from 'react'

const TransActionComponent = (props) => {

	const [searchItem, setSearchItem] = useState("");
	const [filterTransactions, setFilterTransactions] = useState(props.transActions);

	useEffect(() => {
		filterTransactionsFunc(searchItem);
	}, [props.transActions])

	const changeHandler = (e) => {
		setSearchItem(e.target.value);
		filterTransactionsFunc(e.target.value);
	}

	const filterTransactionsFunc = (search) => {
		if (!search || search === "") {
			setFilterTransactions(props.transActions);
			return;
		}

		const filtered = props.transActions.filter((t) => {
			return t.desc.toLowerCase().indexOf(search.toLowerCase()) >= 0;
		})
		setFilterTransactions(filtered);

	}

	return (
		<section>
			<input type="text" onChange={changeHandler} value={searchItem} />
			{filterTransactions.length && filterTransactions.map((t) => (
				<div
					key={t.id}
					className="transaction"
					style={{ borderRight: t.type === "expense" ? "4px solid red" : "4px solid green" }}>
					<span>{t.desc}</span>
					<span>$ {t.amount}</span>
				</div>
			))}
		</section>

	);
}

export default TransActionComponent;