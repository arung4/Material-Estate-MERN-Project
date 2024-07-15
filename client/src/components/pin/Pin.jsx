import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import './pin.scss';
export default function Pin({item}) {
  return (
    <Marker position={[item.latitude,item.longitude]} className="pin">
    <Popup>
      <div className="popupContainer">
        <img src={item.images[0]} alt=""  />
        <div className="textContainer">
         <Link to={`/S{item.id}`}>{item.title}</Link>
         <span className='bed'>{item.bedroom} bedroom</span>
         <b>$ {item.price}</b>
        </div>
      </div>
    </Popup>
  </Marker>
  );
}
