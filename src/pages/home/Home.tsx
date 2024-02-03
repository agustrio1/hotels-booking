import React from "react";
import { hotels } from "../../data/hotelData";
import HotelCard from "../../components/hotel/hotelcard/HotelCard";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Best Hotel in Indonesia</h1>
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Home;
