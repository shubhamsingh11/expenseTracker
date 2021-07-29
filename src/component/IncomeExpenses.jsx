import React , {useContext} from 'react';
import { GlobalContext } from '../context/state';

export const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map(transaction => transaction.amount);
  const income = amount.filter(amount => amount > 0);
  const expense = amount.filter(amount => amount < 0);
  const income_amt = income.reduce((inc, item) => (inc += item), 0).toFixed(2);
  const income_exp = expense.reduce((inc, item) => (inc += item), 0).toFixed(2);

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income_amt}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${income_exp}</p>
        </div>
      </div>
    )
}