import React from "react"
import Properties from "./Properties"
import gql from "graphql-tag"

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

const GET_PROPERTIESS = gql`
	query properties(
		$acqType: String!
		$numBedrooms: Int
		$location: String
		$price: String
		$propertyType: String!
		$priceType: String
	) {
		PropertiesSearch(
			acqType: $acqType
			numBedrooms: $numBedrooms
			location: $location
			price: $price
			propertyType: $propertyType
			priceType: $priceType
		) {
			title
			id
			description
			price
			location {
				name
				id
			}
			numBedrooms
			numBathrooms
			imageURLs
			source {
				name
				url
			}
			propertyType {
				id
				name
			}
			streetAddress
			size
			unitOfMeasurement
			numPlots
			projectName
			developer
			unitName
			floorArea
			hasBalcony
			lister {
				id
				firstname
				lastname
				phone
				email
			}
		}
	}
`

export { QueryResults, GET_PROPERTIESS }
