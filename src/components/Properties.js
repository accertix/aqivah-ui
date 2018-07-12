import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { CardImage, Card, View, Mask } from "mdbreact"
import "../css/Properties.css"

//todo: edit this to fetch results from the form
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
			numBedrooms: $numBedrooms			location: $location
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

// const {
// 	acqType,
// 	numBedrooms,
// 	location,
// 	propertyType,
// 	priceType,
// 	price,
// 	...props
// } = this.props.location.state



const Properties = (acqType, numBedrooms, location, propertyType, priceType, price) => (
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
			console.log(error)
			console.log(loading)
			console.log(data)
			if (loading) return "loading"
			if (error) return "error"

			return data.properties.map(property => {
				console.log(property)

				return (
					<div>
						<View waves>
							<img
								src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
								className="img-fluid"
								alt=""
							/>
							<Mask pattern={7} className="flex-center">
								<p className="white-text">{property.title}</p>
							</Mask>
						</View>
					</div>
				)
			})
		}}
	</Query>
)

export default Properties
