import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { View, Mask, Fa } from "mdbreact"
import { Link } from "react-router-dom"
import PATHS from "./pathConstants"
import "./../css/Properties.css"
import { GET_PROPERTIESS } from "./queries"
import "./../css/Properties.css"
import Property from "./Property"

export default class SearchResults extends Component {
	constructor(props) {
		super(props)
		console.log("properties fix")
		console.log(props)

		//values are stored in props.location.state when coming from search form, but are stored in props when coming from resultsQuickAccessBar. this unifies both
		this.queryValues = this.props.location.state
			? this.props.location.state
			: this.props

		console.log("fresh query values")
		console.log(this.queryValues)

		this.properties = {
			acqType: this.queryValues.acqType,
			numBedrooms: this.queryValues.numBedrooms,
			location: this.queryValues.location,
			price: this.queryValues.price,
			propertyType: this.queryValues.propertyType,
			priceType: this.queryValues.priceType,
		}

		this.state = {
			liked: false,
			queryValues: this.properties,
			searchResults: [],
		}

		console.log(this.properties)
		this.liked = this.liked.bind(this)

		this.updateSearchResults = this.updateSearchResults.bind(this)
	}

	liked(event) {
		this.setState({
			liked: !this.state.liked,
		})
	}

	updateSearchResults(properties) {
		this.setState({ searchResults: properties })
	}

	render() {
		//create single source of truth for all queries, which can then be imported and used.
		const GET_PROPERTIES = gql`
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
		const {
			acqType,
			numBedrooms,
			location,
			price,
			propertyType,
			priceType,
			...props
		} = this.properties

		return (
			<Query
				query={GET_PROPERTIESS}
				variables={{
					acqType,
					numBedrooms,
					location,
					price,
					propertyType,
					priceType,
				}}
			>
				{({ loading, error, data }) => {
					if (loading) return "loading"
					if (error) return "error"

					return data.PropertiesSearch.map(property => {
						return <Property property={property} queryValues={this.state.queryValues}/>
					})
				}}
			</Query>
		)
	}
}
