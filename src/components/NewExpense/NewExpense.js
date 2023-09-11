import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHander = (enteredExpenseData) => {
    //Below makes a new expense data variable, just like one in ExpenseForm.js
    //it takes the entered expense data from expenseform.js and adds an id to it
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData); 
    props.onAddExpense(expenseData); //This function is called, passed in from App.js
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHander}/> {/* start the word with 'on' to show it calls a function */}
    </div>
  );
};

export default NewExpense;
