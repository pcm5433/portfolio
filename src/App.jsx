import {createContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Contents} from './data';
import Site from './components/site';
import "./App.css";

export const dataContext = createContext();

function App() {

  return (
    <div className="App">
      <dataContext.Provider value={Contents}>
        <Routes>
          <Route path="/" element={<Site />} />
        </Routes>
      </dataContext.Provider>
    </div>
  );
}

export default App
