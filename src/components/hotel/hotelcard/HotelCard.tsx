import React from "react";
import "./HotelCard.css";
import formatCurrency from "../../../utils/formatCurrency";
import { Link } from "react-router-dom";

interface Hotel {
  id: number;
  name: string;
  image: string;
  location: string;
  price: number;
}

interface Props {
  hotel: Hotel;
}

const HotelCard: React.FC<Props> = ({ hotel }) => {
  return (
    <Link to={`/hotel/${hotel.id}`} className="hotel-card">
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <div className="hotel-details">
        <h2 className="hotel-name">{hotel.name}</h2>
        <p className="hotel-location">{hotel.location}</p>
        <p className="hotel-price">{formatCurrency(hotel.price)}</p>
      </div>
    </Link>
  );
};

export default HotelCard;
