import React from 'react';

// Local
import './App.css';
import HomeComponent from './pages/Home';

const App: React.FC = () => {   
  return (
    <div className="App" data-testid="home">
      <HomeComponent />
    </div>
  );
}

export default App;
