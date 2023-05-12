import './App.css';
import Friends from './components/friends/friends';
import Profile from './components/profile/profile';
import Nav from './components/nav/nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="logo">Logo</span>
      </header>
      <div className="App-row">
        <div className="App-sidebar">
          <Nav />
        </div>
        <div className="App-main">
          <Routes>
            <Route
              path='/profile'
              element={<Profile name='Кирилл' city='Санкт-Петербург' />}
            />
            <Route path='/friends' element={<Friends />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
