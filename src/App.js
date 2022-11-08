import { Outlet,Routes,Route } from 'react-router';
import './App.css';
import Nav from './component/Nav';
import Footer from './component/Footer'
import DetailPage from './page/DetailPage';
import MainPage from './page/MainPage';
import SearchPage from './page/SearchPage';

const Layout = () => {
  return(
    <div>
      <Nav />
     <Outlet />
     <Footer /> 
    </div>
  )
}
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />}></Route>
        <Route path=':movieId' element={<DetailPage />} />
        <Route path='search' element={<SearchPage />} />
      </Route>
      </Routes>
      
    </div>
  );
}


export default App;
