import './App.css';
import AccountCard from './components/Accounts/AccountCard';
import Form from './components/Form/Form';
import Topbar from './components/Navbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar'
import Transaction from './components/Transactions/Transaction';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div className="App">

      <Sidebar />

      <div className = "main">
        <Topbar />
        <AccountCard />
        <Transaction />
      </div>

      <Form />

    </div>
  );
}

export default App;
