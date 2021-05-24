import logo from './logo.svg';
import ExcelSheet from './components/ExcelSheet'
import DisplayDetails from './components/DisplayDetails'

import { Route, Switch,  BrowserRouter } from 'react-router-dom'
import './App.css';

const App=() => {
 
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/' exact  component={ExcelSheet}></Route>
          <Route  path='/DisplayDetails'  exact component={DisplayDetails}></Route>
          
      </Switch>
      </BrowserRouter>


  );
}

export default App;
