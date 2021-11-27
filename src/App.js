import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Header from './Pages/Shared/Header/Header';
import Payment from './Pages/Payment/Payment';
import Review from './Pages/Home/Review/Review';
import Explore from './Pages/Explore/Explore';

import AllOrder from './Pages/AllOrder/AllOrder';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/MyOrders/MyOrders';

import AddProduct from './Pages/Admin/AddProduct/AddProduct';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import ManageProduct from './Pages/Admin/ManageProduct/ManageProduct';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home ></Home>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login ></Login>
            </Route>
            <Route path="/register">
              <Register ></Register>
            </Route>
            <Route path="/explore">
              <Explore ></Explore>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path='/purchase/:id'>
              <Purchase></Purchase>
            </PrivateRoute>
            {/* user dashboard links  */}
            <PrivateRoute path="/payment">
              <Payment ></Payment>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path='/addreview'>
              <Review />
            </PrivateRoute>
            {/* admin links */}
            <PrivateRoute path="/manageorder">
              <AllOrder ></AllOrder>
            </PrivateRoute>
            <PrivateRoute path="/addproduct">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/manageproducts">
              <ManageProduct />
            </PrivateRoute>


          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
