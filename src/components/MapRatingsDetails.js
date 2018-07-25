import React from "react"
import PropertyMap from "./Map"

const MapRatingsDetails = props => {
	return (
		<PropertyMap
			isMarkerShown
			googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: `400px` }} className="z-depth-2"/>}
			mapElement={<div style={{ height: `100%` }} />}
		/>
	)
}

export default MapRatingsDetails
