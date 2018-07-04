import React, { Component } from "react"
import { Card, CardBody } from "mdbreact"
import "./../css/SearchForm.css"

/**
 * fetch locations
 * take the user's query
 *
 */

export default class SearchForm extends Component {
	constructor(props) {
		super(props)

		this.updateAcquisitionType = this.updateAcquisitionType.bind(this)
		this.showLocations = this.showLocations.bind(this)

		this.state = {
			showNumBedroomsSelect: true,
			showLocationSelect: true,
			showPriceTypes: true,
			showPriceValue: true,
			sellPropertySelected: false,
			locations: [
				{
					name: "Madina",
				},
				{
					name: "Legon",
				},
			],
			queryLocation: "",
			acquisitionTypes: ["Buy", "Rent", "Sell"],
			queryAcquisitionType: "Buy",
			numBedroomOptions: [
				"1 Bedroom",
				"2 Bedroom",
				"3 Bedroom",
				"4 Bedroom",
				"5 Bedroom",
				"more than 5 Bedroom",
			],
			propertyTypes: ["House", "Land", "Commercial Space", "Shop"],
			queryPropertyType: "",
			priceTypes: ["Around", "Below", "Above"],
			queryPriceValue: "",
		}
	}

	updateAcquisitionType(event) {
		const value = event.target.value
		if (value == "Sell") {
			this.setState({
				queryAcquisitionType: value,
				showNumBedroomsSelect: false,
				showLocationSelect: false,
				showPriceTypes: false,
				showPriceValue: false,
				sellPropertySelected: true,
			})
		} else {
			this.setState({
				queryAcquisitionType: value,
				showNumBedroomsSelect: true,
				showLocationSelect: true,
				showPriceTypes: true,
				showPriceValue: true,
				sellPropertySelected: false, //todo: remove this from state if not in use by end of July
			})
		}
	}

	showLocations(event) {
		alert("clicked locations")
		event.preventDefault()
	}

	render() {
		return (
			<div>
				<form className="form">
					{"I’d like to "}
					<select
						value={this.state.queryAcquisitionType}
						onChange={this.updateAcquisitionType}
					>
						{this.state.acquisitionTypes.map(each => {
							return <option>{each}</option>
						})}
					</select>
					{" a "}
					<select
						hidden={
							this.state.showNumBedroomsSelect ? "" : "hidden"
						}
					>
						{this.state.numBedroomOptions.map(each => {
							return <option>{each}</option>
						})}
					</select>{" "}
					<select>
						{this.state.propertyTypes.map(each => {
							return <option>{each}</option>
						})}
					</select>
					<br />
					<div
						hidden={this.state.sellPropertySelected ? "hidden" : ""}
					>
						{" in "}
						<select
							hidden={
								this.state.showLocationSelect ? "" : "hidden"
							}
							onclick={this.showLocations}
						>
							{this.state.locations.map(each => {
								return <option>{each.name}</option>
							})}
						</select>, {" for "}
						<select
							hidden={this.state.showPriceTypes ? "" : "hidden"}
						>
							{this.state.priceTypes.map(each => {
								return <option>{each}</option>
							})}
						</select>
						{" GHS/US$"}
						<input
							type="number"
							value="1500"
							hidden={this.state.showPriceValue ? "" : "hidden"}
						/>
					</div>
					<input
						type="button"
						onclick={this.submitForm}
						value={"Next"}
					/>
				</form>
			</div>
		)
	}
}
