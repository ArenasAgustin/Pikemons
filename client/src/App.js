import { Route } from 'react-router-dom';
import Detail from './components/detail/Detail';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';
import Create from './components/create/Create';
import SearchPage from './components/searchPage/SearchPage';
import Loading from './components/loading/Loading';

function App() {
  return (
    <div>
      <Route exact path='/' component={Landing}/>

      <Route exact path='/home' component={Home}/>

      <Route exact path='/pokemon/:id/:origin' component={Detail}/>

      <Route exact path='/create' component={Create}/>

      <Route exact path='/search' component={SearchPage}/>

      <Route exact path='/loading' component={Loading}/>
    </div>
  );
}

export default App;
