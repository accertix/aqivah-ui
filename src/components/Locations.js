import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"




// const Locations = () => (
// 	<Query
// 		query={gql`
// 			{
// 				rates(currency: "USD") {
// 					currency
// 					rate
// 				}
// 			}
// 		`}
// 	>
// 		{({ loading, error, data }) => {
//             console.log(data)
// 			if (loading) return <p>Loading...</p>
// 			if (error) return <p>Error :( </p>

// 			return data.locations.map(({ currency, rate }) => (
// 				<div key={currency}>
// 					<p>{`${currency}: ${rate}`}</p>
// 				</div>
// 			))
// 		}}
// 	</Query>
// )

// export default Locations
