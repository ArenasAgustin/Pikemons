import { Route } from 'react-router-dom';
import './App.css';
import Detail from './components/detail/Detail';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';
import Create from './components/create/Create';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}/>

      <Route exact path='/home' component={Home}/>

      <Route exact path='/pokemon/:id/:origin' component={Detail}/>

      <Route exact path='/create' component={Create}/>
    </div>
  );
}

export default App;
