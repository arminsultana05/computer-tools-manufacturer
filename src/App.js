
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login';
import Purchase from './Pages/Home/Purchase';
import Footer from './Shared/Footer';
import Header from './Shared/Header';
import SignUp from './Pages/Home/SignUp'
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/Home/RequireAuth';


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
          <Route path='/register' element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </Header>


    </div>
  );
}

export default App;
