import React from "react"
import Properties from "./PropertiesFix"

export default class ResultsQuickAccessBar extends React.Component {
	constructor(props) {
        super(props)
        console.log('the bar')
        console.log(props)

		this.state = {
			isCollapsed: false,
			acqType: this.props.queryValues.acqType,
			numBedrooms: this.props.queryValues.numBedrooms,
			location: this.props.queryValues.location,
			price: this.props.queryValues.price,
            priceType: this.props.queryValues.priceType,
            propertyType: this.props.queryValues.propertyType,
		}
		this.toggleCollapse = this.toggleCollapse.bind(this)
	}

	toggleCollapse(event) {
        this.setState({ isCollapsed: !this.state.isCollapsed })
        this.props.onClick()
	}

	render() {
		return (
			<div onClick={this.toggleCollapse}>
				{this.state.isCollapsed ? (
					<Properties
						acqType={this.state.acqType}
						numBedrooms={this.state.numBedrooms}
						location={this.state.location}
						propertyType={this.state.propertyType}
						priceType={this.state.priceType}
						price={this.state.price}
					/>
				) : (
					<div>tap here to view search results</div>
				)}
			</div>
		)
	}
}
