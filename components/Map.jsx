import { useState, useEffect } from "react";
import * as L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  LayersControl,
  GeoJSON,
  FeatureGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import BFJ from ".././components/data/Border_Final_join.json";
import SPF from ".././components/data/Station_Point_Final.json";
import GOV from ".././components/data/Governorate.json";
import AREA from ".././components/data/Area.json";
import CONSTRUCTION from ".././components/data/Construction_projects.json";

function onEachConstruction(construction, layer) {
  console.log(construction);
}
const positions = [
  { name: "hier ist was", lat: 52, long: 8 },
  { name: "hier ist was anderes", lat: 51, long: 9 },
];

const greenIcon = L.icon({
  iconUrl: "leaf-green.png",
  shadowUrl: "leaf-shadow.png",

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

//////////////////////////// this component should be in a separate file ;)

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

//////////////////////////// our map component


export default function Map() {
  return (
    <MapContainer
      className="Map"
      center={[29, 47]}
      zoom={15}
      scrollWheelZoom
    >
    
      <LayersControl position='topright'>
 
      <GeoJSON
      data={GOV}
      />
           <GeoJSON
      data={AREA}
      />
        <LayersControl.BaseLayer radio name="Open Street Name">
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </LayersControl.BaseLayer>
        <LayersControl.BaseLayer radio name="Satalite">
        <TileLayer
    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
    url="https://api.mapbox.com/styles/v1/lzahrani/clb7ov42s001q15qgj54sms68/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHphaHJhbmkiLCJhIjoiY2xiN295YzU5MGRjaDN0bGo1ZmdkbmNtdSJ9.lZ0_MSSUHq5gDmXFqbrc1Q"
  />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer radio name="Satalite">
        <TileLayer
        url="https://tiles.arcgis.com/tiles/2zwTmDUxTzTVBytU/arcgis/rest/services/KuwaitFinder3Basemap/VectorTileServer?f=jsapi&cacheKey=9919458153afac15"
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        zoom={15}
      />
      </LayersControl.BaseLayer>
      <LayersControl.Overlay radio name="Construction Projects">
        <GeoJSON
        data={BFJ.features}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay radio name="Stations Projects">
        <GeoJSON
        data={SPF.features}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay radio name="Construction Projects">
        <GeoJSON data={CONSTRUCTION.features} onEachFeature={onEachConstruction}>
        </GeoJSON>                         
      </LayersControl.Overlay>
      </LayersControl>
      {positions.map((position) => {
        return (
          <Marker position={[position.lat, position.long]} icon={greenIcon}>
            <Popup>{position.name}</Popup>
          </Marker>
        );
      })}

      <LocationMarker />
    </MapContainer>
    
  );
}
