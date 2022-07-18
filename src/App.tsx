import * as React from "react";
import './App.css';
import NavBar from './components/Navbar/Navbar';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ItemDetailContainer from './components/Containers/ItemListContainer/ItemDetailContainer';
import { ContextCard } from './Context/CardContext';
import CartView from './components/CartView/CartView';
import PayOrder from './components/PayOrder/PayOrder';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from './components/Login/Login';

function App() {
// A custom 404 page

  const { totalUnits } = React.useContext(ContextCard);
  const location = useLocation();
  return (

    <div className="App">
      <NavBar quantityProduct={totalUnits} />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={1000}>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Navigate to={"/"} replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:id' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail:id' element={<ItemDetailContainer />} />
        <Route path='/CartView' element={<CartView />} />
        <Route path='/PayOrder' element={<PayOrder />} />
        <Route path='*'  element={<NotFound /> } />
      </Routes>
      </CSSTransition>
      </TransitionGroup>
      <footer className='App-footer'>
        Footer
      </footer>
    </div>
  );
} 
export default App;
