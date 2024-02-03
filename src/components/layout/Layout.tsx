import Home from "../../pages/home/Home";
import { Route, Routes } from "react-router-dom";
import HotelDetail from "../hotel/hoteldetail/HotelDetail";

const Layout = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/hotel/:id" element={<HotelDetail />} />
    </Routes>
  );
};

export default Layout;
