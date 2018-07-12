import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { View, Mask } from "mdbreact"
import {Link} from 'react-router-dom'
import PATHS from './pathConstants'

export default class SearchResults extends Component {
	constructor(props) {
		super(props)

		this.state = {
			acqType: this.props.location.state.acqType,
			numBedrooms: this.props.location.state.numBedrooms,
			location: this.props.location.state.location,
			price: this.props.location.state.price,
			propertyType: this.props.location.state.propertyType,
			priceType: this.props.location.state.priceType,
			searchResults: [],
		}
	}

	componentWillMount() {
		//run the query, and populate properties obj with result.
	}

	render() {
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
		} = this.state

		return (
			<Query
				query={GET_PROPERTIES}
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
						return (
							<Link
								to={{
									pathname: `${PATHS.SEARCH_RESULTS}/${property.id}`,
									state: {
										currentProperty: property,
									},
								}}
							>
								<View>
									<img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" />
									<div>{property.title}</div>
									<Mask />
								</View>
							</Link>
						)
					})
				}}
			</Query>
		)
	}
}
