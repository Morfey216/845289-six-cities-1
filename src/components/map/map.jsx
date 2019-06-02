import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const ZOOM = 12;
const PIN_WIDTH = 27;
const PIN_HEIGHT = 39;

class Map extends React.PureComponent {

  render() {
    return <section className="cities__map map" id="mapid" style={{width: `100%`, height: 800}}/>;
  }

  componentDidMount() {
    this._createMap();
  }

  componentDidUpdate() {
    if (this.map) {
      this.map.remove();
    }
    this._createMap();
  }

  _createMap() {
    const startCoordinate = this.props.offers[0].city.coordinates;
    this.map = leaflet.map(`mapid`, {
      center: startCoordinate,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    const icon = leaflet.icon({
      iconUrl: `img/map-pin.svg`,
      iconSize: [PIN_WIDTH, PIN_HEIGHT]
    });

    this.map.setView(startCoordinate, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`})
      .addTo(this.map);

    this.props.offers.forEach((offer) => {
      leaflet.marker(offer.coordinates, {icon}).addTo(this.map);
    });
  }

}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Map;
