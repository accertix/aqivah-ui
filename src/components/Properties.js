import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { CardImage, Card, View, Mask } from "mdbreact"
import "../css/Properties.css"

//todo: edit this to fetch results from the form
const GET_PROPERTIES = gql`
	query {
		properties: Properties {
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

const Properties = props => (
	<Query query={GET_PROPERTIES}>
		{({ loading, error, data }) => {
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
							<Mask pattern={7} className="flex-down">
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
