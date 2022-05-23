
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login';
import Purchase from './Pages/Home/Purchase';
import Footer from './Shared/Footer';
import Header from './Shared/Header';
import SignUp from './Pages/Home/SignUp'
import RequireAuth from './Pages/Home/RequireAuth';
import Dashbord from './Pages/Dashbord';
import NotFound from './Pages/NotFound';
import MyOrders from './Pages/MyOrders';
import Rivews from './Pages/Rivews';
import MyProfile from './Pages/MyProfile';
// import MyOrders from './Pages/MyOrders';
// import Rivews from './Pages/Rivews';



function App() {
  return (
    <div>

      <Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/purchase/:purchaseId' element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>
          <Route path='/dashbord' element={<RequireAuth>
            <Dashbord></Dashbord>
          </RequireAuth>}>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path= 'rivew' element={<Rivews></Rivews>}></Route>
            <Route path= 'profile' element={<MyProfile></MyProfile>}></Route>
          </Route>
          <Route path='/register' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        </Header>

      
     



    </div>
  );
}

export default App;
