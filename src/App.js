import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Tourist from './pages/Tourist';
import TouristDetails from './pages/TouristDetails';
import TouristSearchResult from './pages/TouristSearchResult';
import Restaurant from './pages/Restaurant';
import RestaurantDetails from './pages/RestaurantDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path="about" element={<About/>} />

          <Route path="tourist">
            <Route index element={<Tourist/>} />
            <Route path=":TRRSRT" element={<TouristDetails/>} />
            </Route>
           
            <Route path="restaurant">
              <Route index element={<Restaurant/>} />
              <Route path=":BSSH_NM" element={<RestaurantDetails/>} />
             
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;





