import React, { Component } from "react"
import { Query } from "react-apollo"
import { Card, CardBody, Fa } from "mdbreact"
import "./../css/SearchForm.css"
import { map } from "async"
import gql from "graphql-tag"
import Locations from "./Locations"
import { Link } from "react-router-dom"
import { QueryResults } from "./queries"
import PATHS from "./pathConstants"
import SearchButton from "./SearchButton"
import Header from "./Header"
import SearchFormOptions from "./SearchFormOptions"

//todo: send state values in array to db, so admin can easily update.

export default class SearchForm extends Component {
	constructor(props) {
		super(props)

		this.handleAcqTypeOnClick = this.handleAcqTypeOnClick.bind(this)
		this.handleAcqTypeSelected = this.handleAcqTypeSelected.bind(this)

		this.handleNumBedroomsOnClick = this.handleNumBedroomsOnClick.bind(this)
		this.handleNumBedroomsSelected = this.handleNumBedroomsSelected.bind(this)

		this.updateAcquisitionType = this.updateAcquisitionType.bind(this)
		// this.toggleShowLocations = this.toggleShowLocations.bind(this)
		this.hideLocations = this.hideLocations.bind(this)
		// this.showLocations = this.showLocations.bind(this)
		this.handleNumBedroomsChanged = this.handleNumBedroomsChanged.bind(this)
		this.handlePropertyTypeChanged = this.handlePropertyTypeChanged.bind(this)
		this.handleLocationChanged = this.handleLocationChanged.bind(this)
		this.updatePrice = this.updatePrice.bind(this)
		// this.queryProperties = this.queryProperties.bind(this)

		this.state = {
			showOptions: false,
			showLocationOptions: false,
			showNumBedroomOptions: false,
			showPriceTypeOptions: false,
			showPropertyTypeOptions: false,
			showAcquisitionTypeOptions: false,

			showNumBedroomTypes: true,
			showLocation: true,
			showPriceTypes: true,
			showPriceValue: true,
			showPropertyTypes: true,
			showButton: true,

			priceTypes: ["Around", "Below", "Above"],
			acquisitionTypes: ["Buy", "Rent", "Sell"],
			propertyTypes: ["House", "Land", "Office", "Shop"],
			numBedroomOptions: [
				"1 Bedroom",
				"2 Bedroom",
				"3 Bedroom",
				"4 Bedroom",
				"5 Bedroom",
				"6+ Bedroom",
			],

			queryAcquisitionType: "Buy",
			queryNumBedrooms: 1,
			queryNumBedroomsText: "1 Bedroom",
			queryPropertyType: "House",
			queryPriceType: "Around",
			queryLocation: "Madina",
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

	handleAcqTypeOnClick() {
		this.setState({
			showAcquisitionTypeOptions: true,
			showNumBedroomTypes: false,
			showPropertyTypes: false,
			showLocation: false,
			showPriceTypes: false,
			showPriceValue: false,
			showOptions: true,
		})
	}

	handleAcqTypeSelected(event) {
		console.log(event.target.innerHTML)
		if (event.target.innerHTML === "Sell") {
			this.setState({
				queryAcquisitionType: event.target.innerHTML,
				showPropertyTypes: true,
				showAcquisitionTypeOptions: false,
				showOptions: false,
			})
		} else {
			this.setState({
				queryAcquisitionType: event.target.innerHTML,
				showNumBedroomTypes: true,
				showPropertyTypes: true,
				showLocation: true,
				showPriceTypes: true,
				showPriceValue: true,
				showOptions: false,
				showAcquisitionTypeOptions: false,
			})
		}
	}

	handleNumBedroomsOnClick() {
		this.setState({
			showNumBedroomOptions: true,
			showPropertyTypes: false,
			showLocation: false,
			showPriceTypes: false,
			showPriceValue: false,
			showOptions: true,
		})
	}

	handleNumBedroomsSelected(event) {
		console.log(event.target.value)
		this.setState({
			queryNumBedroomsText: event.target.innerHTML,
			showPropertyTypes: true,
			showLocation: true,
			showPriceTypes: true,
			showPriceValue: true,
			showOptions: false,
			showNumBedroomOptions: false,
		})
	}

	//todo: remove
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
				<span className="form text-center">
					<h3>
						{"I’d like to "}
						<span
							className="form-select green-text"
							onClick={this.handleAcqTypeOnClick}
						>
							{this.state.queryAcquisitionType}{" "}
							<Fa icon="angle-down green-text" />
						</span>
						{" a  "}
						{this.state.showNumBedroomTypes ? (
							<span>
								<span
									className="form-select green-text"
									onClick={this.handleNumBedroomsOnClick}
								>
									{this.state.queryNumBedroomsText}{" "}
									<Fa icon="angle-down green-text" />
								</span>
							</span>
						) : (
							""
						)}{" "}
						{this.state.showPropertyTypes ? (
							<span className="form-select green-text">
								{this.state.queryPropertyType}{" "}
								<Fa icon="angle-down green-text" />
							</span>
						) : (
							""
						)}
						{this.state.showLocation ? (
							<span>
								{" in "}
								<span className="form-select green-text">
									{this.state.queryLocation} <Fa icon="angle-down green-text" />
								</span>
							</span>
						) : (
							""
						)}
						{this.state.showPriceTypes ? (
							<span>
								{" for "}
								<span className="form-select green-text fa-sm">
									{this.state.queryPriceType}{" "}
									<Fa icon="angle-down green-text" />
								</span>
							</span>
						) : (
							""
						)}
						{this.state.showPriceValue ? (
							<span>
								<span>
									{" GHS"}
									<span className="form-select green-text fa-sm">
										{this.state.queryPriceValue}{" "}
									</span>
								</span>
							</span>
						) : (
							""
						)}
						{this.state.showOptions ? (
							<SearchFormOptions
								acqTypes={this.state.acquisitionTypes}
								numBedrooms={this.state.numBedroomOptions}
								propertyTypes={this.state.propertyTypes}
								priceTypes={this.state.priceTypes}
								showAcqTypes={this.state.showAcquisitionTypeOptions}
								showNumBedroomTypes={this.state.showNumBedroomOptions}
								showPropertyTypes={this.state.showPropertyTypeOptions}
								showPriceTypes={this.state.showPriceTypeOptions}
								showLocations={this.state.showLocationOptions}
								handleAcqTypeClick={this.handleAcqTypeSelected}
								handleNumBedroomsClick={this.handleNumBedroomsSelected}
							/>
						) : (
							""
						)}
						<br />
						<br />
						{this.state.showButton ? (
							<SearchButton
								acqType={this.state.queryAcquisitionType}
								numBedrooms={this.state.queryNumBedrooms}
								propertyType={this.state.queryPropertyType}
								priceType={this.state.queryPriceType}
								location={this.state.queryLocation}
								price={this.state.queryPriceValue}
							/>
						) : (
							""
						)}
					</h3>
				</span>
			</div>
		)
	}
}
