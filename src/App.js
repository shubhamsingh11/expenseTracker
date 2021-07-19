import './App.css';
import { Header } from './component/Header.jsx';
import { Balance } from './component/Balance.jsx';
import { IncomeExpenses } from './component/IncomeExpenses.jsx';
import { TransactionList } from './component/TransactionList.jsx';
import { AddTransaction } from './component/AddTransaction.jsx';

import { GlobalProvider } from './context/state';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
