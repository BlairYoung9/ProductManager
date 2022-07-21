import Form from './components/form';
import All from './components/All';
import ViewOne from './components/ViewOne';
import Update from "./components/Update"
import './App.css';
import {Link, Switch, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Products</h1>
      <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      <Link to="/products">Product List</Link>
      <hr/>
      <Form/>
        
      
      <Switch>
        <Route path = "/products/update/:id">
          <Update/>
        </Route>
        <Route path ="/products/:id">
          <ViewOne/>
        </Route>
        <Route exact path = "/products">
          <All/>
        </Route>    
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
