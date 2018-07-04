import React, { Component, Row, Col } from "react"
import "./App.css"
import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import SearchForm from "./components/SearchForm"
import logo from "./static/placeholder-logo.png"
import { ApolloClient } from "apollo-boost"
import gql from "graphql-tag"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { ApolloProvider } from "react-apollo"
import Locations from "./components/Locations"

/**
 * loading page: all white, with aqivah, all caps, words spaced out, and colors changing between the 4.
 * main page: show the links for seeker, owner(coming soon), investor(coming soon)
 * clicking on either of these animates page sliding to the left, and reveals the pages where real work begins.
 * seeker page:
 *  : search form
 *  : filter
 *  : list of results
 *  : result details, with pane to easily tap, to get back to results.
 */
const cache = new InMemoryCache()
const link = new HttpLink()
const client = new ApolloClient({
	uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
	link,
	cache,
})

class App extends Component {
	render() {
		return (
			<div className="App">
				<ApolloProvider client={client}>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-1">
								insert main side nav here
							</div>
							<div className="col-md-3">
								<img src={logo} />
							</div>
							<div className="col-md-8">
								<SearchForm />
							</div>
						</div>
					</div>
				</ApolloProvider>
			</div>
		)
	}
}

export default App
