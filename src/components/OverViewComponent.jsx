import React, { useState } from 'react';
import TransActionFrom from './TransActionForm';
const OverViewComponent = ({ expense, income, addTransaction }) => {
	const [isshow, setIsshow] = useState(false);
	return (
		<div>
			<div className="topSection">
				<p>Balance : {income - expense}</p>
				<button className={`btn ${isshow ? "cancel" : null}`} onClick={() => setIsshow((prevState) => !prevState)}>{isshow ? "Cancel" : "Add"}</button>
			</div>
			{isshow && <TransActionFrom setIsshow={setIsshow} addTransaction={addTransaction} />}
			<div className="topSection">
				<div className="expenseBox">Expense <span style={{ color: "red" }}>{expense} $</span></div>
				<div className="expenseBox">income <span> {income} $</span> </div>
			</div>
		</div>
	);
}

export default OverViewComponent;