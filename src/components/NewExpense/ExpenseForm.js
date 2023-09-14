import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate,setEnteredDate] = useState('');
  //enteredTitle is the current state snapshot saved into a variable. setEnteredTitle is the function that will be called to update the state
  
  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setEnteredTitle(value);
    } else if (identifier === 'amount') {
      setEnteredAmount(value);
    } else if (identifier === 'date') {
      setEnteredDate(value);
    }
  }

  const submitHandler = (event) => { // Prevents the default behavior of the form
    event.preventDefault();
    const expenseData = { //This is the data that we want to pass to the parent component
      title: enteredTitle, //title amount and date are taken from the usestate above
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData); //This function is called, passed in from NewExpense.js
    setEnteredTitle('');                  //Set the entered data to empty strings as default
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} 
          onChange={(event) => inputChangeHandler('title', event.target.value)} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount}
            onChange={(event) => inputChangeHandler('amount', event.target.value)} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2023-01-01' max='2024-12-31' value={enteredDate}
            onChange={(event) => inputChangeHandler('date', event.target.value)} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
