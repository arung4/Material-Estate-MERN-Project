import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './Map.scss'; 
import Pin from '../pin/Pin';

export default function Map({items}) {
  return (
    <MapContainer center={items.length==1? [items[0].latitude,items[0].longitude] :[51.5074,-0.1278]} zoom={13} scrollWheelZoom={true} className='map' >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     {items.map((item)=>(
      <Pin key={item.id} item={item} />
     ))}

  </MapContainer>
  );
}
