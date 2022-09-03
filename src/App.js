import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';

function App() {
  return (
    <div className="betterview">
      <h1 data-testid='head'>Welcome to Testing</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
