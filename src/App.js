import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Header,
  Home,
  SingleItem,
  Watched,
  Watchlist,
  Watchtime,
  Discover,
} from './components';
import { GlobalProvider } from 'context';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/:type/:id" element={<SingleItem />}></Route>
        </Routes>
        <Routes>
          <Route path="/watchlist" element={<Watchlist />}></Route>
        </Routes>
        <Routes>
          <Route path="/watched" element={<Watched />}></Route>
        </Routes>
        <Routes>
          <Route path="/watchtime" element={<Watchtime />}></Route>
        </Routes>
        <Routes>
          <Route path="/discover" element={<Discover />}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
