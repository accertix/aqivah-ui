import React from "react"
import Locations from "./Locations"

const SearchFormOptions = props => {
	return (
		<div className="m-1 ">
			{props.showAcqTypes
				? props.acqTypes.map(item => {
						return (
							<div
								className="form animated slideInDown"
								onClick={props.handleAcqTypeClick}
							>
								{item}
							</div>
						)
				  })
				: ""}

			{props.showNumBedroomTypes
				? props.numBedrooms.map(item => {
						return (
							<div
								className="form animated slideInDown"
								value="1"
								onClick={props.handleNumBedroomsClick}
							>
								{item}
							</div>
						)
				  })
				: ""}
			{props.showPropertyTypes
				? props.propertyTypes.map(item => {
						return (
							<div
								className="form animated slideInDown"
								onClick={props.handlePropertyTypeClick}
							>
								{item}
							</div>
						)
				  })
				: ""}
			{props.showPriceTypes
				? props.priceTypes.map(item => {
						return (
							<div
								className="form animated slideInDown"
								onClick={props.handlePriceTypeClick}
							>
								{item}
							</div>
						)
				  })
				: ""}
		</div>
	)
}

export default SearchFormOptions
