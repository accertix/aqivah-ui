import React from "react"
import Locations from "./Locations"

const SearchFormOptions = props => {
	return (
		<div className="m-2 ">
			{props.showAcqTypes
				? props.acqTypes.map(item => {
						return (
							<div className="form animated slideInDown" onClick={props.handleAcqTypeClick}>
								<b>{item}</b>
								<br />
								<br />
							</div>
						)
				  })
				: ""}

			{props.showNumBedroomTypes
				? props.numBedrooms.map(item => {
						return (
							<div className="form animated slideInDown">
								<b>{item}</b>
								<br />
								<br />
							</div>
						)
				  })
				: ""}
			{props.showPropertyTypes
				? props.propertyTypes.map(item => {
						return (
							<div className="form animated slideInDown">
								<b>{item}</b>
								<br />
								<br />
							</div>
						)
				  })
				: ""}
			{props.showPriceTypes
				? props.priceTypes.map(item => {
						return (
							<div className="form animated slideInDown">
								<b>{item}</b>
								<br />
								<br />
							</div>
						)
				  })
				: ""}
		</div>
	)
}

export default SearchFormOptions
