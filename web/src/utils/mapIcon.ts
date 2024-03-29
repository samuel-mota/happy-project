
import Leaflet from "leaflet";
import mapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68], // define where the icon is pointing
  popupAnchor: [170, 2],
});

export default mapIcon;

// const mapIcon = Leaflet.icon({
//   iconUrl: mapMarkerImg,
//   iconSize: [58, 68],
//   iconAnchor: [29, 68], // define where the icon is pointing
//   popupAnchor: [0, -60],,
// });