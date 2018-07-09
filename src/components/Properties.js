import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

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

const Properties = () => (
	<Query query={GET_PROPERTIES}>
		{({loading, error, data}) => {
			if (loading) return "loading"
			if (error) return "error"
			
			return data.properties.map(property => {
				console.log(property)
				return <li key={property.id}>{property.title}</li>
			})
		}}
	</Query>
)

export default Properties
