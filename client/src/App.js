import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Detail from './components/detail/Detail';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path='/pokemon/:name' component={Detail}/>
    </div>
  );
}

export default App;
