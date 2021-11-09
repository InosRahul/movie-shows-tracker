import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
const App = () => {
  return (
    <Router>
      <Header />
      {/* <Routes></Routes> */}
      <div className="App">
        <h1>Hello</h1>
      </div>
    </Router>
  );
};

export default App;
