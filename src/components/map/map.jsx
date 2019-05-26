import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const START_COORDINATE = [52.38333, 4.9];
const ZOOM = 12;
const PIN_WIDTH = 27;
const PIN_HEIGHT = 39;

class Map extends React.PureComponent {
  render() {
    return <section className="cities__map map" id="map"/>;
  }

  componentDidMount() {
    this._createMap();
  }

  _createMap() {
    const map = leaflet.map(`map`, {
      center: START_COORDINATE,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    const icon = leaflet.icon({
      iconUrl: `img/map-pin.svg`,
      iconSize: [PIN_WIDTH, PIN_HEIGHT]
    });

    map.setView(START_COORDINATE, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`})
      .addTo(map);

    this.props.offers.forEach((offer) => {
      leaflet.marker(offer.coordinates, {icon}).addTo(map);
    });
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Map;
