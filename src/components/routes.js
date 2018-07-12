import React from "react"
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom"
import SearchForm from "./SearchForm"
import { QueryResults } from "./queries"
import Error from "./Error"

const Routes = () => {
	return (
		<Router>
			<div>
                <Switch>
				<Route exact path="/" component={SearchForm} />
				<Route path="/search_results" render={QueryResults} />
                <Route component={Error} />
                </Switch>
			</div>
		</Router>
	)
}

export default Routes