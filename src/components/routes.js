import React from "react"
import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
} from "react-router-dom"
import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"
import ResultDetails from "./ResultDetails"
import Test from './Test'
import Error from "./Error"
import PATHS from "./pathConstants"

const Routes = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path={PATHS.HOME} component={SearchForm} />
					<Route exact path={PATHS.SEARCH_RESULTS} component={SearchResults} />
					<Route path={PATHS.SEARCH_RESULT_DETAILS} component={ResultDetails} />
					<Route path={PATHS.TEST} component={Test} />
					<Route component={Error} />
				</Switch>
			</div>
		</Router>
	)
}

export default Routes
