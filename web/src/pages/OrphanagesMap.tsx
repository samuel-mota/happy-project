import React, { useEffect, useState } from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import mapMarkerImg from "../images/map-marker.svg";
import api from "../services/api";
import mapIcon from "../utils/mapIcon";

import "../styles/pages/orphanages-map.css";

interface Orphanage { // dont need to add all fields, only the necessary 
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}


function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      // console.log(response);

      setOrphanages(response.data);
    })
  }, [])

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estąo esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Paulinia</strong>
          <span>Sao Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-22.7507562, -47.1761267]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* LEAFLET MAP */}
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

        {/* MAPBOX MAP */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
