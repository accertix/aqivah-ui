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
import { BrowserRouter as Router, NavLink } from "react-router-dom"
import Routes from "./components/routes"
import Header from "./components/Header"

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
const link = new HttpLink({ uri: "http://localhost:4000/graphql" })
const client = new ApolloClient({
	link,
	cache,
})

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuToggled: false,
		}
		this.toggleMenu = this.toggleMenu.bind(this)
	}

	toggleMenu() {
		this.setState({ menuToggled: !this.state.menuToggled })
	}

	render() {
		return (
			<div className="App ">
				<ApolloProvider client={client}>
					<Router>
						<div>
							{this.state.menuToggled ? (
								<div onClick={this.toggleMenu}>
									"menu should be showing now. Click here to hide menu"
								</div>
							) : (
								<div>
									<Header toggleMenu={this.toggleMenu} />
									<br />
									<div className="container">
										<div className="row">
											<div className="col-12">
												<br />
												<Routes />
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</Router>
				</ApolloProvider>
			</div>
		)
	}
}

export default App
