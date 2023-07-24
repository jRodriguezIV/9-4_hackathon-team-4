import { useMemo, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";

const MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


function CentersMap({ data }) {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const center = useMemo(() => ({ lat: 40.712776, lng: -74.005974 }), []);
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAPS_KEY,
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="centers-map">
      <GoogleMap
        zoom={11}
        center={center}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          mapTypeControl: false
        }}
      >
        <MarkerClusterer>
          {(clusterer) => (
            data.map((place) => (
              <Marker
                key={place.id}
                position={{
                  lat: place.the_geom.coordinates[1],
                  lng: place.the_geom.coordinates[0],
                }}
                onClick={() => {
                  place === selectedPlace
                  ? setSelectedPlace(undefined)
                  : setSelectedPlace(place)
                }}
                clusterer={clusterer}
              />
            ))
          )}
        </MarkerClusterer>
        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.the_geom.coordinates[1],
              lng: selectedPlace.the_geom.coordinates[0],
            }}
            zIndex={1}
            options={{
              pixelOffset: {
                width: 0,
                height: -40,
              }
            }}
            onCloseClick={() => setSelectedPlace(undefined)}
          >
            <div>
              <h3>{selectedPlace.divisionna}</h3>
              <p>{selectedPlace.service}</p>
              <p>{selectedPlace.phonenumbe}</p>
              <a
                href={`http://maps.google.com/?q=${selectedPlace.address}, ${selectedPlace.city}, NY ${parseInt(selectedPlace.zipcode)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`${selectedPlace.address}, ${selectedPlace.city}, NY ${parseInt(selectedPlace.zipcode)}`}
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default CentersMap;