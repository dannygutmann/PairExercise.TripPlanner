const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = "pk.eyJ1IjoiZGFubnlndXRtYW5uIiwiYSI6ImNrMTZtNTVqbjE3M24zbG1vNnZvZng4NWMifQ.feAZU1rnrNnVNR6yK-qLtQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const marker = new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);
