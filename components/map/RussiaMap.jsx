import React, { Component } from "react";
import PropTypes from "prop-types";
import MapGL, { Popup, Marker } from "react-map-gl";
import styled from "styled-components";
import StoryInfo from "./StoryInfo";
import CityPin from "./CityPin";
import STORIES from "./cities";
import pin from "./pin.png";

const Map = styled.section`
  width: 100%;
  height: 60rem;
  @media (max-width: 415px) {
    height: 40rem;
  }
  .mapboxgl-popup {
    .mapboxgl-popup-content {
      background: transparent;
      border: 2px solid white;
      padding: 0;
      border-radius: 0;
    }
    .mapboxgl-popup-tip {
      border-right-color: white;
      border-width: 15px!important;
    }
    .mapboxgl-popup-close-button {
      font-size: 3rem;
    }
  }
  .pin {
    height: 4rem;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: -12px;
  }
`;

export default class RussiaMap extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
  };

  state = {
    viewport: {
      longitude: 70,
      latitude: 63,
      zoom: 3,
      bearing: 0,
      pitch: 0,
      maxZoom: 3,
      minZoom: 3,
    },
    popupInfo: null,
  };

  onViewportChange = viewport => {
    this.setState({ viewport });
  };

  renderCityMarker = (city, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={city.longitude}
      latitude={city.latitude}
    >
      <img
        src={pin}
        className="pin"
        onClick={() => this.setState({ popupInfo: city })}
        alt=""
      />
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
          <StoryInfo info={popupInfo} />
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
          mapStyle="mapbox://styles/sorokinvj/cjxeor38t0v111cmm36vbbruc"
          onViewportChange={this.onViewportChange}
          scrollZoom={false}
        >
          {STORIES.map(this.renderCityMarker)}
          {this.renderPopup()}
        </MapGL>
      </Map>
    );
  }
}
