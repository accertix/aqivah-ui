import React from 'react'
import Properties from './Properties'


/**main query to search for properties */
const QueryResults = props => {
	return (
		<Properties
			acquisitionType={props.queryAcquisitionType}
			numBedrooms={props.queryNumBedrooms}
			priceType={props.priceTypes}
            location={props.queryLocation}
            price={props.queryPriceValue}
            propertyType={props.queryPropertyType}
			{...props}
		/>
	)
}

export {QueryResults}