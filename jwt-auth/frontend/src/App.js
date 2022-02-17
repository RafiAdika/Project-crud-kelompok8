import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/crud">
          <Navbar />
          <ProductList />
        </Route>
        <Route path="/add">
          <AddProduct />
        </Route>
        <Route path="/edit/:id">
          <EditProduct />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
