import React from 'react';
import { useParams } from 'react-router-dom';
import {hotels} from '../../../data/hotelData';
import './HotelDetail.css'

const HotelDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const hotel = id ? hotels.find((hotel) => hotel.id === parseInt(id)) : undefined;

  if (!hotel) {
    return <div>Hotel not found!</div>;
  }

  return (
    <div>
      <h2>{hotel.name}</h2>
      <img src={hotel.image} alt={hotel.name} />
      <p>Rating : {hotel.rating}</p>
      <p>Fasilitas: {hotel.facilities.join(', ')}</p>
      <p>Lokasi: {hotel.location}</p>
      <p>Harga: {hotel.price}</p>
      <p>Deskripsi: {hotel.description}</p>
    </div>
  );
};

export default HotelDetail;
