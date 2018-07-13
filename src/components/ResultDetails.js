import React from "react"
import ResultsQuickAccessBar from "./ResultsQuickAccessBar"

export default class ResultDetails extends React.Component {
	constructor(props) {
		super(props)
		console.log("results details page")
		console.log(props)

		this.state = {
			//store all properties, and store current property.
			//pass all props to the bar that pops the modal up. on selection, update the current property.
			currentProperty: this.props.location.state.currentProperty,

			queryValues: this.props.location.state.queryValues,
			quickAccessBarIsCollapsed: false,
		}

        this.collapseQuickAccessBar = this.collapseQuickAccessBar.bind(this)
        console.log(this.state.queryValues)
	}

	collapseQuickAccessBar() {
		this.setState({
			quickAccessBarIsCollapsed: !this.state.quickAccessBarIsCollapsed,
		})
	}

	render() {
        const { id } = this.props.match.params
        
		return (
			<div>
				
                <br /> <ResultsQuickAccessBar queryValues={this.state.queryValues}
                onClick={this.collapseQuickAccessBar} />
				{this.state.quickAccessBarIsCollapsed
					? ""
					: ` ${id} <br /> bar that links to modal showing all property details
				<br /> <br />Display property details here
				<br /> carousel of images
				<br /> BASIC INFO, MAPS & RATINGS, [probably be grouped into tabs]
				<br /> title, option to like/save the property for later.
				<br /> description.
				<br /> num Bedrooms, num Bathrooms, size + unit of measurement,
				numPlots, project name by developer, unitName
				<br /> location
				<br /> street address
				<br /> update property history as well, if liked.`}
			</div>
		)
	}
}
