import React, { useState, useContext } from "react";
import DeckGL, { GeoJsonLayer } from 'deck.gl'
import { StaticMap } from 'react-map-gl'

import { GlobalContext } from '../context/GlobalState'

const Map = () => {
  const { data } = useContext(GlobalContext)
  
  const layers = [
    new GeoJsonLayer ({
      id: 'geojson-layer',
      data,
      pickable: true,
      stroked: false,
      filled: true,
      extruded: true,
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: [255, 0, 180, 200],
      getRadius: 70,
      getLineWidth: 1,
      getElevation: 30

    })
  ]
  return (
    <DeckGL 
      initialViewState={{
        longitude: -90.269510,
        latitude:  38.627003,
        zoom: 12,
        bearing: 0,
        pitch: 0
      }}
      controller={true}
      height='100vh'
      width='100vw'
      layers={layers}
      getTooltip={({object}) => object && object.properties.description && object.properties.date}
    >
      <StaticMap
       mapStyle='mapbox://styles/mrao2/cjzuiuexr09mn1crs8tz35s3k'
       mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
    </DeckGL>
  )
};

export default Map;
