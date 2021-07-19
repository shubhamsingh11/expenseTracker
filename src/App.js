import './App.css';
import { Header } from './component/Header.jsx';
import { Balance } from './component/Balance.jsx';
import { IncomeExpenses } from './component/IncomeExpenses.jsx';
import { TransactionList } from './component/TransactionList.jsx';
import { AddTransaction } from './component/AddTransaction.jsx';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
