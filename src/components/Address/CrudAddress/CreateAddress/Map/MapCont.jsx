import React, { useState, useEffect } from 'react';
import MapGL, { Marker, Source, Layer, GeolocateControl, NavigationControl  } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {  makeStyles } from "@material-ui/styles";
import { Button } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyle = makeStyles({
	button: {
		position: 'fixed',
		bottom: "10%",
		backgroundColor: '#2C7BE5',
		color: 'white',
		borderRadius: 15,
		width: '40%',
		fontFamily: 'IranSans',
		right: '30%'
	},
	locIcon: {
		fontSize: 40,
		color: '#2C7BE5'
	}
})

const MAPBOX_ACCESS_TOKEN =
	'pk.eyJ1IjoiaGFkaWVza2FuZGFyaSIsImEiOiJjam9uMDdmMDkxNnY2M29wYzZxNzc3MzVwIn0.q4V2ENmVFJmGegA-ylUDdg';

export default function MapCont(props) {
	const classes = useStyle();
	const [ viewport, setViewport ] = useState({
		latitude: 35.70064694792973,
	    longitude: 51.40315401697205,
		zoom: 10
  });
  const onDragEnd = (lngLat) => {
    debugger
    setViewport({
      ...viewport,
      latitude: lngLat.lngLat.lat,
      longitude: lngLat.lngLat.lng
    });
  };
	const [ selectedLayer, setSelectedLayer ] = useState(null);

	const layerClicked = (e) => {
		setSelectedLayer(e.features[0].properties);
	};


	// https://raw.githubusercontent.com/yassermzh/iran-map/master/maps/tehran_iran_admin.geojson
	return (
		<div>
			<MapGL
				style={{ width: '100%', height: '85vh' }}
				accessToken={MAPBOX_ACCESS_TOKEN}
				latitude={viewport.latitude}
				longitude={viewport.longitude}
				zoom={viewport.zoom}
				onViewportChange={(viewport) => {setViewport(viewport)}}
				onClick={onDragEnd}
					>
				<Source
					id="maine"
					type="geojson"
					data="https://raw.githubusercontent.com/yassermzh/iran-map/master/maps/tehran_iran_admin.geojson"
				/>
				<Layer
					id="maine"
					type="fill"
					source="maine"
					paint={{
						'fill-color': '#088',
						'fill-opacity': 0.5
					}}
					onClick={layerClicked}
				/>
				<Source
					id="lineS"
					type="geojson"
					data="https://raw.githubusercontent.com/yassermzh/iran-map/master/maps/tehran_iran_admin.geojson"
				/>
				<Layer
					id="lineS"
					type="line"
					source="lineS"
					paint={{
						'line-color': '#e8b',
						'line-width': 1
					}}
        
        />


<Marker longitude={viewport.longitude} latitude={viewport.latitude}>
        <div onClick={(event) => {
			event.persist();
			event.nativeEvent.stopImmediatePropagation();
			event.stopPropagation();
        }}>
			<LocationOnIcon className={classes.locIcon}/>
        </div>
      </Marker>
      <GeolocateControl
      position="top-left"
      />
      <NavigationControl showCompass showZoom position='top-right' />
			</MapGL>
      		<Button className={classes.button} onClick={() => {props.showData(props.show? false : true)}}>تایید محل</Button>
      
			
		</div>
	);
}
