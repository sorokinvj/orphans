import React, { Component } from 'react';
import MapGL, { Popup, Marker } from 'react-map-gl';
import styled from 'styled-components';
import CityInfo from './CityInfo';
import CityPin from './CityPin';
import CITIES from './cities';

const Map = styled.section`
  margin-bottom: 7rem;
  width: 100%;
  height: 60rem;
`;

export default class RussiaMap extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // }

  state = {
    viewport: {
      longitude: 70,
      latitude: 60,
      zoom: 3,
      bearing: 0,
      pitch: 0,
      maxZoom: 4,
      minZoom: 3,
    },
    popupInfo: null,
  };

  onViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  renderCityMarker = (city, index) => (
    <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
      <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
    </Marker>
  );

  renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { token } = this.props;
    const { viewport } = this.state;

    return (
      <Map>
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapboxApiAccessToken={token}
          mapStyle="mapbox://styles/sorokinvj/cjxdlp8dp05co1cs9w87w15s1"
          onViewportChange={this.onViewportChange}
        >
          {CITIES.map(this.renderCityMarker)}
          {this.renderPopup()}
        </MapGL>
      </Map>
    );
  }
}
