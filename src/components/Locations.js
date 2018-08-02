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
				return <div key={location.id} className="form-select">{location.name}</div>
			})
		}}
	</Query>
)

export default Locations
