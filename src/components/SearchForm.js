import React, { Component } from "react"
import { Query } from "react-apollo"
import { Card, CardBody } from "mdbreact"
import "./../css/SearchForm.css"
import { map } from "async"
import gql from "graphql-tag"
import Locations from "./Locations"
import Properties from "./Properties"

/**
 * fetch locations
 * take the user's query
 *
 */

export default class SearchForm extends Component {
	constructor(props) {
		super(props)

		this.updateAcquisitionType = this.updateAcquisitionType.bind(this)
		// this.toggleShowLocations = this.toggleShowLocations.bind(this)
		this.hideLocations = this.hideLocations.bind(this)
		// this.showLocations = this.showLocations.bind(this)
		this.handleNumBedroomsChanged = this.handleNumBedroomsChanged.bind(this)
		this.handlePropertyTypeChanged = this.handlePropertyTypeChanged.bind(
			this
		)
		this.handleLocationChanged = this.handleLocationChanged.bind(this)
		this.updatePrice = this.updatePrice.bind(this)

		this.state = {
			showNumBedroomsSelect: true,
			showLocationSelect: true,
			showPriceTypes: true,
			showPriceValue: true,
			sellPropertySelected: false,
			showLocationsList: false,
			locations: [
				{
					name: "Madina",
				},
				{
					name: "Legon",
				},
			],
			queryLocation: "Madina",
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
			queryNumBedrooms: "1 Bedroom",
			propertyTypes: ["House", "Land", "Commercial Space", "Shop"],
			queryPropertyType: "House",
			priceTypes: ["Around", "Below", "Above"],
			queryPriceValue: 500,
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

	// toggleShowLocations(event) {
	// 	const currentShow = this.state.showLocationsList
	// 	this.setState({ showLocationsList: !currentShow })
	// }

	hideLocations(event) {
		this.setState({
			showLocationsList: false,
			queryLocation: event.target.value,
		})
	}

	handleLocationChanged(event) {
		this.setState({ queryLocation: event.target.value })
	}

	handleNumBedroomsChanged(event) {
		this.setState({ queryNumBedrooms: event.target.value })
	}

	handlePropertyTypeChanged(event) {
		if (event.target.value != "House") {
			this.setState({
				queryPropertyType: event.target.value,
				showNumBedroomsSelect: false,
			})
		} else {
			this.setState({
				queryPropertyType: event.target.value,
				showNumBedroomsSelect: true,
			})
		}
	}

	updatePrice(event) {
		this.setState({
			queryPriceValue: event.target.value,
		})
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
						value={this.state.queryNumBedrooms}
						onChange={this.handleNumBedroomsChanged}
					>
						{this.state.numBedroomOptions.map(each => {
							return <option>{each}</option>
						})}
					</select>{" "}
					<select
						onChange={this.handlePropertyTypeChanged}
						value={this.state.queryPropertyType}
					>
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
							type="text"
							value={this.state.queryLocation}
							onChange={this.handleLocationChanged}
						>
							<Locations />
							{/* {this.state.locations.map(location => {
								return <option>{location.name}</option>
							})} */}
						</select>
						{", for "}
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
							value={this.state.queryPriceValue}
							hidden={this.state.showPriceValue ? "" : "hidden"}
							onChange={this.updatePrice}
						/>
					</div>
					<br />
					<input
						type="button"
						onClick={this.submitForm}
						value={"Next"}
					/>
				</form>
				<br />
				{/**todo: if this isn't needed by august, delete**/}
				<div hidden={this.state.showLocationsList ? "" : "hidden"}>
					<ul>
						{this.state.locations.map(location => {
							return (
								<a href="">
									<li
										key=""
										onClick={this.handleLocationChanged}
									>
										{location.name}
									</li>
								</a>
							)
						})}
					</ul>
				</div>
				<Properties />
			</div>
		)
	}
}
