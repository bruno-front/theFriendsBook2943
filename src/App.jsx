import './App.css';
import Friends from './components/friends/friends';
import Profile from './components/profile/profile';
import Nav from './components/nav/nav';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);

  let plusCount = () => {
    setCount( count + 1 );

  }

  let minusCount = () => {
    if ( count > 0 ) {
      setCount( count - 1 );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <span className="logo">Logo</span>
        <div className="count">
          <button onClick={ () => minusCount() }>-</button>
          <span>{ count }</span>
          <button onClick={ () => plusCount() }>+</button>
        </div>
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
