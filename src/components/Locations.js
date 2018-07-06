import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const Locations = () => (
	<Query
		query={gql`
			query {
				locations: Locations {
					name
					id
				}
			}
		`}
	>
		{({ loading, error, data }) => {
			if (loading) return <option>Loading...</option>
			if (error) return <option>Error...</option>

			return data.locations.map(location => {
				return <option key={location.id}>{location.name}</option>
			})
		}}
	</Query>
)

export default Locations
