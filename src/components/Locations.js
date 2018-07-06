import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const Locations = (props) => {
    <Query
		query={gql`
		Locations{
			name
			id
		}
	`}
	>
		{({ loading, error, data }) => {
			if (loading) return <p>Loading...</p>
			if (error) return <p>Error...</p>

			return data.Locations.map((name, id) => {
				;<li key={id}>name</li>
			})
		}}
	</Query>
}

export default Locations
