import React from 'react';
import PropTypes from 'prop-types';

import amaps from '../../static/amaps.iife';

import './style.scss';

const PREVIEW_ZOOM_LEVEL = 14;

class Map extends React.Component {
  componentDidMount() {
    amaps.createMap({
      center: {
        latitude: this.props.latlng.latitude,
        longitude: this.props.latlng.longitude
      },
      layer: 'standaard',
      target: 'mapdiv',
      marker: false,
      search: false,
      zoom: PREVIEW_ZOOM_LEVEL
    });
  }

  render() {
    return (
      <div className="map-component">
        <div className="row">
          <div className="col-12">
            <div className="map">
              <div id="mapdiv" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Map.defaultProps = {
  latlng: {}
};

Map.propTypes = {
  latlng: PropTypes.object
};

export default Map;
