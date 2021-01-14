import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <div class="grid-container">
      <header class="row">
        <div>
          <a class="brand" href="index.html">amazona</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      </div>
      <main>
        <Route path="/" component={HomeScreen} exact="/"/>
       <Route path="/product/:id" component={ProductScreen}/>
     
    </main>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
