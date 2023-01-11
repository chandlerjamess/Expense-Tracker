import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};
	// lifting state up
	// this is about moving data from a child component up to a parent component
	// use it later or pass it to another child
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
		// This is used to transfer a component into another component through use of a function
		// commincate between a child component up to a parent component
	);
};

export default NewExpense;
