import { useState } from 'react';
// import './ExpenseTracker.css'; // Import the CSS file for styling

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleAddExpense = () => {
        const category = document.getElementById('Category-select').value;
        const amount = Number(document.getElementById('amount-input').value);
        const date = document.getElementById('date-input').value;

        if (category === '' || isNaN(amount) || amount <= 0 || date === '') {
            alert('Please enter valid data');
            return;
        }

        const newExpense = { category, amount, date };
        setExpenses([...expenses, newExpense]);
        setTotalAmount(totalAmount + amount);
    };

    const handleDeleteExpense = (index, amount) => {
        const updatedExpenses = expenses.filter((_, i) => i !== index);
        setExpenses(updatedExpenses);
        setTotalAmount(totalAmount - amount);
    };

    return (
        <div className="expense-tracker">
            <h1 className="font-bold p-5 justify-center flex">Expense Tracker App</h1>
            <div className="input-section mb-5">
                <label htmlFor="Category-select" className='font-semibold mr-3'>Category</label>
                <select id="Category-select" className=' border bg-slate-400 rounded-lg p-2'>
                    <option value="Food & Beverage">Food & Beverage</option>
                    <option value="Rent">Rent</option>
                    <option value="Transport">Transport</option>
                    <option value="Relaxing">Relaxing</option>
                </select>
                <label htmlFor="amount-input" className='ml-5 font-medium mr-2'>Amount:</label>
                <input className='border bg-slate-400' type="number" id="amount-input" />
                <label htmlFor="date-input" className='font-medium ml-3 mr-1'>Date</label>
                <input type="date" id="date-input" className='border  mr-3' />
                <button onClick={handleAddExpense} className='bg-green-600 text-white  p-1.5 rounded-lg'>Add</button>
            </div>
            <div className="expenses-list">
                <h2 className='flex justify-center font-bold'>Expenses List</h2>
                <table className="w-full">
                    <thead>
                        <tr className="bg-green-500 text-white">
                            <th className="py-2">Category</th>
                            <th className="py-2">Amount</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, index) => (
                            <tr key={index}>
                                <td>{expense.category}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.date}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteExpense(index, expense.amount)}
                                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="py-2 font-bold">Total:</td>
                            <td className="py-2 font-bold">{totalAmount}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default ExpenseTracker;
