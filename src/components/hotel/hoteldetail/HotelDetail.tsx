import React from "react";
import { useParams } from "react-router-dom";
import { hotels } from "../../../data/hotelData";
import "./HotelDetail.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useHotelDetailsStore } from "../../../store/store";
import formatCurrency from "../../../utils/formatCurrency";

const HotelDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const hotel = id
    ? hotels.find((hotel) => hotel.id === parseInt(id))
    : undefined;

  const { showDescription, toggleDescription } = useHotelDetailsStore();

  if (!hotel) {
    return <div>Hotel not found!</div>;
  }

  return (
    <div className="hotel-detail">
      <h2>{hotel.name}</h2>
      <img src={hotel.image} alt={hotel.name} />
      <p>Rating : {hotel.rating}</p>
      <p>Fasilitas: {hotel.facilities.join(", ")}</p>
      <p>Lokasi: {hotel.location}</p>
      <p>Harga: {formatCurrency(hotel.price)}</p>
      <div className="description-toggle" onClick={toggleDescription}>
        <p>Deskripsi {showDescription ? <FaAngleUp /> : <FaAngleDown />}</p>
      </div>
      {showDescription && <p>{hotel.description}</p>}
    </div>
  );
};

export default HotelDetail;
