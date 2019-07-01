import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';
import {getActiveOffer} from '../../reducer/data/selectors';

const PIN_WIDTH = 27;
const PIN_HEIGHT = 39;

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <section className={`${this.props.mapClassName} map`} id="mapid"/>;
  }

  componentDidMount() {
    try {
      this._createMap();
    } catch (err) {
      //
    }
  }

  componentDidUpdate() {
    try {
      if (this.map) {
        this.map.remove();
      }
      this._createMap();
    } catch (err) {
      //
    }
  }

  _createMap() {
    const currentCityData = this.props.currentOffersData[0].city;
    const activeOffer = this.props.activeOffer;
    const centralMapPoint = activeOffer ? activeOffer : currentCityData;
    const centerCoordinates = [centralMapPoint.location.latitude, centralMapPoint.location.longitude];
    const mapZoom = centralMapPoint.location.zoom;

    const icon = leaflet.icon({
      iconUrl: `/img/map-pin.svg`,
      iconSize: [PIN_WIDTH, PIN_HEIGHT]
    });

    const activeIcon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [PIN_WIDTH, PIN_HEIGHT]
    });

    this.map = leaflet.map(`mapid`, {
      center: centerCoordinates,
      zoom: mapZoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(centerCoordinates, mapZoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`})
      .addTo(this.map);

    if (activeOffer) {
      const activeOfferLocation = [
        activeOffer.location.latitude,
        activeOffer.location.longitude,
      ];

      leaflet.marker(activeOfferLocation, {icon: activeIcon}).addTo(this.map);
    }

    this.props.currentOffersData.forEach((offer) => {
      const offerLocation = [
        offer.location.latitude,
        offer.location.longitude,
      ];

      if (offer !== activeOffer) {
        leaflet.marker(offerLocation, {icon}).addTo(this.map);
      }
    });
  }
}

Map.propTypes = {
  currentOffersData: PropTypes.array.isRequired,
  activeOffer: PropTypes.object,
  mapClassName: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeOffer: getActiveOffer(state),
});

export {Map};
export default connect(mapStateToProps)(Map);
