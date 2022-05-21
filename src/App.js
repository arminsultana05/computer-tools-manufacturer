
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login';
import Purchase from './Pages/Home/Purchase';
import Footer from './Shared/Footer';
import Header from './Shared/Header';


function App() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        </Routes>
        <Footer></Footer>
      </Header>


    </div>
  );
}

export default App;
