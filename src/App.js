import React, { Component } from "react"
import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					I’d like to
					<select className="mdb-select dropdown-primary">
						<option value="0" />
						<option value="1">Male</option>
						<option value="1">Female</option>
					</select>
					Buy a 3 Bedroom Home in Accokeek, MD Accokeek, MD for Around
					$370k $370k
				</div>
			</div>
		)
	}
}

export default App
