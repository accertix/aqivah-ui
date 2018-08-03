import React from "react"
import { Button } from "mdbreact"
import { Link } from "react-router-dom"
import PATHS from "./pathConstants"

const SearchButton = props => {
	console.log(props)
	return (
		<Link
			to={{
				pathname: PATHS.SEARCH_RESULTS,
				state: {
					acqType: props.acqType,
					numBedrooms: props.numBedrooms,
					propertyType: props.propertyType,
					priceType: props.priceType,
					location: props.location,
					price: props.priceValue,
				},
			}}
		>
			<Button className="btn-lg" color="success">
				{"Next"}
			</Button>
		</Link>
	)
}

export default SearchButton
